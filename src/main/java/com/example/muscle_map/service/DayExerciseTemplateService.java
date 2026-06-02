package com.example.muscle_map.service;

import com.example.muscle_map.Dto.DayExerciseTemplateRequestDto;
import com.example.muscle_map.Dto.DayExerciseTemplateResponseDto;

import java.util.List;
import java.util.UUID;

public interface DayExerciseTemplateService {

    DayExerciseTemplateResponseDto addExerciseToDay(UUID dayTemplateId,
                                                    DayExerciseTemplateRequestDto requestDto,
                                                    String email);

    List<DayExerciseTemplateResponseDto> getExercisesByDay(UUID dayTemplateId, String email);

    DayExerciseTemplateResponseDto updateExerciseInDay(UUID dayExerciseId,
                                                       DayExerciseTemplateRequestDto requestDto,
                                                       String email);

    void deleteExerciseFromDay(UUID dayExerciseId, String email);
}