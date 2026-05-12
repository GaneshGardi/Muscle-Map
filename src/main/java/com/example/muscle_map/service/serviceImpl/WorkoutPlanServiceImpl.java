package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.WorkoutPlanRequestDto;
import com.example.muscle_map.Dto.WorkoutPlanResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;
import com.example.muscle_map.mapper.WorkoutPlanMapper;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.repository.WorkoutPlanRepo;
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


    public WorkoutPlanServiceImpl(UserRepo userRepo,
                                  WorkoutPlanRepo workoutPlanRepo,
                                  WorkoutPlanMapper mapper
                                  ) {
        this.userRepo = userRepo;
        this.workoutPlanRepo = workoutPlanRepo;
        this.mapper = mapper;

    }

    @Override
    @Transactional
    public WorkoutPlanResponseDto createWorkoutPlan(WorkoutPlanRequestDto requestDTO, UUID userId) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        // Convert DTO to Entity
        WorkoutPlan workoutPlan = mapper.toEntity(requestDTO);

        // Your Business Logic: First plan should be active, others inactive
        boolean hasExistingPlans = workoutPlanRepo.existsByUserId(userId);

        if (!hasExistingPlans) {
            workoutPlan.setActive(true);
            workoutPlan.setStartedAt(LocalDateTime.now());
        } else {
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
                .orElseThrow(() -> new RuntimeException("No workout plan found with id: " + newWorkoutPlanId));

        if (!plan.getUserId().equals(userId)) {
            throw new RuntimeException("This plan does not belong to you");
        }

        // Deactivate all active plans
        workoutPlanRepo.deactivateAllPlansByUserId(userId);

        // Activate selected plan
        plan.setActive(true);
        plan.setStartedAt(LocalDateTime.now());

        WorkoutPlan savedPlan = workoutPlanRepo.save(plan);
        return mapper.toResponseDto(savedPlan);
    }

    @Override
    public WorkoutPlanResponseDto getWorkoutPlanById(UUID workoutId) {
        WorkoutPlan plan = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout plan not found with id: " + workoutId));

        return mapper.toResponseDto(plan);
    }

    @Override
    public List<WorkoutPlanResponseDto> getAllWorkoutPlansByUserId(UUID userId) {
        return workoutPlanRepo.findByUserId(userId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<WorkoutPlanResponseDto> getActiveWorkoutPlansByUserId(UUID userId) {
        return workoutPlanRepo.findByUserIdAndIsActiveTrue(userId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public WorkoutPlanResponseDto updateWorkoutPlan(UUID workoutId, WorkoutPlanRequestDto requestDTO) {

        WorkoutPlan existingPlan = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout plan not found with id: " + workoutId));

        // Update fields from DTO
        existingPlan.setTitle(requestDTO.getTitle());
        existingPlan.setDescription(requestDTO.getDescription());
        existingPlan.setRepeatEnabled(requestDTO.getRepeatEnabled());
        existingPlan.setRepeatForWeeks(requestDTO.getRepeatForWeeks());

        // Handle active status change
        if (requestDTO.getIsActive() && !existingPlan.isActive()) {
            workoutPlanRepo.deactivateAllPlansByUserId(existingPlan.getUserId());
            existingPlan.setStartedAt(LocalDateTime.now());
        }

        existingPlan.setActive(requestDTO.getIsActive());

        WorkoutPlan updatedPlan = workoutPlanRepo.save(existingPlan);
        return mapper.toResponseDto(updatedPlan);
    }

    @Override
    public void deleteWorkoutPlan(UUID workoutId) {
        WorkoutPlan plan = workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout plan not found with id: " + workoutId));

        workoutPlanRepo.delete(plan);
    }
}