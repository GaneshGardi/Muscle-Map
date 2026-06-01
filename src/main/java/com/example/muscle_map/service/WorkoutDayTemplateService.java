package com.example.muscle_map.service;

import com.example.muscle_map.Dto.WorkoutDayTemplateRequestDto;
import com.example.muscle_map.Dto.WorkoutDayTemplateResponseDto;

import java.util.List;
import java.util.UUID;

public interface WorkoutDayTemplateService {

    WorkoutDayTemplateResponseDto createWorkoutDay(UUID weekId, WorkoutDayTemplateRequestDto requestDto, String email);

    List<WorkoutDayTemplateResponseDto> getDaysByWeekId(UUID weekId, String email);

    WorkoutDayTemplateResponseDto getDayById(UUID dayId, String email);

    WorkoutDayTemplateResponseDto updateWorkoutDay(UUID dayId, WorkoutDayTemplateRequestDto requestDto, String email);

    void deleteWorkoutDay(UUID dayId, String email);
}