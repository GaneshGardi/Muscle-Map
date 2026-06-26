package com.example.muscle_map.dto.exercise;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExerciseTemplateRequestDto {
    private String name;
    private String muscleGroup;
    private String equipment;
}