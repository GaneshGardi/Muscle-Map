package com.example.muscle_map.service;

import com.example.muscle_map.Dto.WorkoutPlanRequestDto;
import com.example.muscle_map.Dto.WorkoutPlanResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;

import java.util.List;
import java.util.UUID;

public interface WorkoutPlanService {

    WorkoutPlanResponseDto createWorkoutPlan(WorkoutPlanRequestDto requestDTO, UUID userId);

    WorkoutPlanResponseDto switchWorkoutPlan(UUID newWorkoutPlanId, UUID userId);

    WorkoutPlanResponseDto getWorkoutPlanById(UUID workoutId);

    List<WorkoutPlanResponseDto> getAllWorkoutPlansByUserId(UUID userId);

    List<WorkoutPlanResponseDto> getActiveWorkoutPlansByUserId(UUID userId);

    WorkoutPlanResponseDto updateWorkoutPlan(UUID workoutId, WorkoutPlanRequestDto workoutPlan);

    void deleteWorkoutPlan(UUID workoutId);

}
