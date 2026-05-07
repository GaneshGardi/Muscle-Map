package com.example.muscle_map.service;

import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;

import java.util.List;
import java.util.UUID;

public interface WorkoutPlanService {

    WorkoutPlan createWorkoutPlan(WorkoutPlan workoutPlan, UUID userId);

    WorkoutPlan switchWorkoutPlan(UUID newWorkoutPlanId, UUID userId);

    WorkoutPlan getWorkoutPlanById(UUID workoutId);

    List<WorkoutPlan> getAllWorkoutPlansByUserId(UUID userId);

    List<WorkoutPlan> getActiveWorkoutPlansByUserId(UUID userId);

    WorkoutPlan updateWorkoutPlan(UUID workoutId, WorkoutPlan workoutPlan);

    void deleteWorkoutPlan(UUID workoutId);

}
