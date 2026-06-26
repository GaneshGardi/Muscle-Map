package com.example.muscle_map.service;

import com.example.muscle_map.Dto.WorkoutWeekRequestDto;
import com.example.muscle_map.Dto.WorkoutWeekResponseDto;

import java.util.List;
import java.util.UUID;

public interface WorkoutWeekService {

    WorkoutWeekResponseDto createWorkoutWeek(UUID planId, WorkoutWeekRequestDto requestDto, String email);

    List<WorkoutWeekResponseDto> getWeeksByPlanId(UUID planId, String email);

    WorkoutWeekResponseDto getWorkoutWeekById(UUID weekId, String email);

    void deleteWorkoutWeek(UUID weekId, String email);
}