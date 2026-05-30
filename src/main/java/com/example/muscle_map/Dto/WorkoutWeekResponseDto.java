package com.example.muscle_map.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class WorkoutWeekResponseDto {

    private UUID id;
    private UUID planId;
    private Integer weekNumber;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
