package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.*;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.DayExerciseTemplateMapper;
import com.example.muscle_map.mapper.WorkoutDayTemplateMapper;
import com.example.muscle_map.mapper.WorkoutPlanMapper;
import com.example.muscle_map.mapper.WorkoutWeekMapper;
import com.example.muscle_map.repository.*;
import com.example.muscle_map.service.WorkoutPlanService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkoutPlanServiceImpl implements WorkoutPlanService {

    private final UserRepo userRepo;
    private final WorkoutPlanRepo workoutPlanRepo;
    private final WorkoutPlanMapper mapper;
    private final DayExerciseTemplateRepo dayExerciseTemplateRepo;
    private final WorkoutWeekRepo workoutWeekRepo;
    private final WorkoutWeekMapper workoutWeekMapper;
    private final WorkoutDayTemplateRepo workoutDayTemplateRepo;
    private final DayExerciseTemplateMapper dayExerciseTemplateMapper;
    private final WorkoutDayTemplateMapper workoutDayTemplateMapper;


    public WorkoutPlanServiceImpl(UserRepo userRepo,
                                  WorkoutPlanRepo workoutPlanRepo,
                                  WorkoutPlanMapper mapper, DayExerciseTemplateRepo dayExerciseTemplateRepo, WorkoutWeekRepo workoutWeekRepo, WorkoutWeekMapper workoutWeekMapper, WorkoutDayTemplateRepo workoutDayTemplateRepo, DayExerciseTemplateMapper dayExerciseTemplateMapper, WorkoutDayTemplateMapper workoutDayTemplateMapper) {
        this.userRepo = userRepo;
        this.workoutPlanRepo = workoutPlanRepo;
        this.mapper = mapper;
        this.dayExerciseTemplateRepo = dayExerciseTemplateRepo;
        this.workoutWeekRepo = workoutWeekRepo;
        this.workoutWeekMapper = workoutWeekMapper;
        this.workoutDayTemplateRepo = workoutDayTemplateRepo;
        this.dayExerciseTemplateMapper = dayExerciseTemplateMapper;
        this.workoutDayTemplateMapper = workoutDayTemplateMapper;

    }

    @Override
    @Transactional
    public WorkoutPlanResponseDto createWorkoutPlan(WorkoutPlanRequestDto requestDTO, UUID userId) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        // Check duplicate title
        if (workoutPlanRepo.existsByUserIdAndTitleIgnoreCase(userId, requestDTO.getTitle())) {
            throw new BadRequestException("Workout plan with title '" + requestDTO.getTitle() + "' already exists");
        }

        WorkoutPlan workoutPlan = mapper.toEntity(requestDTO);

        // === Business Logic: Only One Active Plan ===
        boolean hasExistingPlans = workoutPlanRepo.existsByUserId(userId);

        if (!hasExistingPlans) {
            // First plan → Make it active by default
            workoutPlan.setActive(true);
            workoutPlan.setStartedAt(LocalDateTime.now());
        } else {
            // Other plans → Default inactive
            workoutPlan.setActive(false);
        }

        workoutPlan.setUserId(userId);
        workoutPlan.setUser(user);

        user.addWorkoutPlan(workoutPlan);

        WorkoutPlan savedPlan = workoutPlanRepo.save(workoutPlan);
        return mapper.toResponseDto(savedPlan);
    }

    @Override
    @Transactional
    public WorkoutPlanResponseDto switchWorkoutPlan(UUID newWorkoutPlanId, UUID userId) {

        WorkoutPlan plan = workoutPlanRepo.findById(newWorkoutPlanId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout plan not found with id: " + newWorkoutPlanId));

        if (!plan.getUserId().equals(userId)) {
            throw new BadRequestException("This plan does not belong to you");
        }

        // Deactivate all plans of this user
        workoutPlanRepo.deactivateAllPlansByUserId(userId);

        // Activate the selected plan
        plan.setActive(true);
        plan.setStartedAt(LocalDateTime.now());

        WorkoutPlan savedPlan = workoutPlanRepo.save(plan);
        return mapper.toResponseDto(savedPlan);
    }

    @Override
    public WorkoutPlanResponseDto getActiveWorkoutPlanByUserId(UUID userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        WorkoutPlan activePlan = workoutPlanRepo.findActivePlanByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("No active workout plan found for this user"));

        return mapper.toResponseDto(activePlan);
    }

    // Other methods (getAll, update, delete) look fine
    @Override
    public List<WorkoutPlanResponseDto> getAllWorkoutPlansByUserId(UUID userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        return workoutPlanRepo.findByUserId(userId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutPlanResponseDto getWorkoutPlanById(UUID workoutId) {
        WorkoutPlan plan = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout plan not found"));
        return mapper.toResponseDto(plan);
    }

    @Override
    @Transactional
    public WorkoutPlanResponseDto updateWorkoutPlan(UUID workoutId, WorkoutPlanRequestDto requestDTO) {

        WorkoutPlan existing = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout plan not found"));

        existing.setTitle(requestDTO.getTitle());
        existing.setDescription(requestDTO.getDescription());
        existing.setRepeatEnabled(requestDTO.getRepeatEnabled());
        existing.setRepeatForWeeks(requestDTO.getRepeatForWeeks());

        // If user wants to activate this plan
        if (Boolean.TRUE.equals(requestDTO.getIsActive()) && !existing.isActive()) {
            workoutPlanRepo.deactivateAllPlansByUserId(existing.getUserId());
            existing.setStartedAt(LocalDateTime.now());
        }

        existing.setActive(Boolean.TRUE.equals(requestDTO.getIsActive()));

        WorkoutPlan updated = workoutPlanRepo.save(existing);
        return mapper.toResponseDto(updated);
    }

    @Override
    public void deleteWorkoutPlan(UUID workoutId) {
        WorkoutPlan plan = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout plan not found"));
        workoutPlanRepo.delete(plan);
    }


    @Override
    public WorkoutPlanDetailsResponseDto getWorkoutPlanDetails(
            UUID planId,
            String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found with email: " + email));

        WorkoutPlan plan = workoutPlanRepo.findById(planId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Workout plan not found with id: " + planId));

        // Ownership check
        if (!plan.getUserId().equals(user.getId())) {
            throw new BadRequestException(
                    "You do not have access to this workout plan");
        }

        WorkoutPlanDetailsResponseDto response =
                new WorkoutPlanDetailsResponseDto();

        response.setId(plan.getId());
        response.setTitle(plan.getTitle());
        response.setDescription(plan.getDescription());

        List<WorkoutWeekResponseDto> weekDtos =
                workoutWeekRepo.findByPlanIdOrderByWeekNumber(planId)
                        .stream()
                        .map(week -> {

                            WorkoutWeekResponseDto weekDto =
                                    workoutWeekMapper.toResponseDto(week);

                            List<WorkoutDayTemplateResponseDto> dayDtos =
                                    workoutDayTemplateRepo
                                            .findByWeekIdOrderBySortOrderAsc(week.getId())
                                            .stream()
                                            .map(day -> {

                                                WorkoutDayTemplateResponseDto dayDto =
                                                        workoutDayTemplateMapper
                                                                .toResponseDto(day);

                                                List<DayExerciseTemplateResponseDto> exerciseDtos =
                                                        dayExerciseTemplateRepo
                                                                .findByDayTemplateIdOrderBySortOrderAsc(day.getId())
                                                                .stream()
                                                                .map(dayExerciseTemplateMapper::toResponseDto)
                                                                .toList();

                                                dayDto.setExercises(exerciseDtos);

                                                return dayDto;
                                            })
                                            .toList();

                            weekDto.setDays(dayDtos);

                            return weekDto;
                        })
                        .toList();

        response.setWeeks(weekDtos);

        return response;
    }
}