package com.example.muscle_map.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class DayExerciseTemplateRequestDto {

    private UUID exerciseTemplateId;
    private Integer targetSets;
    private String targetReps;
    private Double targetWeight;
    private String notes;
    private Integer sortOrder;
}