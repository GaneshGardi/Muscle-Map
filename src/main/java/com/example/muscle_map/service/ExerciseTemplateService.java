package com.example.muscle_map.service;

import com.example.muscle_map.dto.exercise.ExerciseTemplateRequestDto;
import com.example.muscle_map.dto.exercise.ExerciseTemplateResponseDto;

import java.util.List;
import java.util.UUID;

public interface ExerciseTemplateService {

    ExerciseTemplateResponseDto createExercise(ExerciseTemplateRequestDto requestDto, String email);

    ExerciseTemplateResponseDto getExerciseById(UUID id);

    List<ExerciseTemplateResponseDto> getMyExercises(String email);

    List<ExerciseTemplateResponseDto> getAllExercisesByUser(UUID userId);

    List<ExerciseTemplateResponseDto> getExercisesByMuscleGroup(String muscleGroup);

    ExerciseTemplateResponseDto updateExercise(UUID id, ExerciseTemplateRequestDto requestDto, UUID userId);

    void deleteExercise(UUID id, UUID userId);
}