package com.example.muscle_map.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutPlanResponseDto {

    private UUID id;
    private UUID userId;
    private String title;
    private String description;
    private boolean repeatEnabled;
    private Integer repeatForWeeks;
    private boolean isActive;
    private LocalDateTime startedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
