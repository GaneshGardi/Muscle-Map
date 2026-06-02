package com.example.muscle_map.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class DayExerciseTemplateResponseDto {

    private UUID id;
    private UUID dayTemplateId;
    private UUID exerciseTemplateId;
    private Integer targetSets;
    private String targetReps;
    private Double targetWeight;
    private String notes;
    private Integer sortOrder;
    private LocalDateTime createdAt;
}