package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.WorkoutWeekRequestDto;
import com.example.muscle_map.Dto.WorkoutWeekResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;
import com.example.muscle_map.entity.WorkoutWeek;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.WorkoutWeekMapper;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.repository.WorkoutPlanRepo;
import com.example.muscle_map.repository.WorkoutWeekRepo;
import com.example.muscle_map.service.WorkoutWeekService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkoutWeekServiceImpl implements WorkoutWeekService {

    private final WorkoutWeekRepo workoutWeekRepo;
    private final WorkoutPlanRepo workoutPlanRepo;
    private final UserRepo userRepo;
    private final WorkoutWeekMapper mapper;

    public WorkoutWeekServiceImpl(WorkoutWeekRepo workoutWeekRepo,
                                  WorkoutPlanRepo workoutPlanRepo,
                                  UserRepo userRepo,
                                  WorkoutWeekMapper mapper) {
        this.workoutWeekRepo = workoutWeekRepo;
        this.workoutPlanRepo = workoutPlanRepo;
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    @Override
    public WorkoutWeekResponseDto createWorkoutWeek(UUID planId, WorkoutWeekRequestDto requestDto, String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        WorkoutPlan plan = workoutPlanRepo.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout plan not found"));

        // Ownership check
        if (!plan.getUserId().equals(user.getId())) {
            throw new BadRequestException("You can only add weeks to your own workout plans");
        }

        // Check if week number already exists for this plan
        if (workoutWeekRepo.existsByPlanIdAndWeekNumber(planId, requestDto.getWeekNumber())) {
            throw new BadRequestException("Week " + requestDto.getWeekNumber() + " already exists in this plan");
        }

        WorkoutWeek week = mapper.toEntity(requestDto);
        week.setPlanId(planId);

        WorkoutWeek savedWeek = workoutWeekRepo.save(week);
        plan.addWorkoutWeek(savedWeek);   // Maintain bidirectional relationship

        return mapper.toResponseDto(savedWeek);
    }

    @Override
    public List<WorkoutWeekResponseDto> getWeeksByPlanId(UUID planId, String email) {
        // Optional: Add ownership check here
        return workoutWeekRepo.findByPlanId(planId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutWeekResponseDto getWorkoutWeekById(UUID weekId, String email) {
        WorkoutWeek week = workoutWeekRepo.findById(weekId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout week not found"));

        return mapper.toResponseDto(week);
    }

    @Override
    public void deleteWorkoutWeek(UUID weekId, String email) {
        WorkoutWeek week = workoutWeekRepo.findById(weekId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout week not found"));

        workoutWeekRepo.delete(week);
    }
}