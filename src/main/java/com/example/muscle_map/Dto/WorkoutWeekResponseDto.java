package com.example.muscle_map.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.List;
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

    private List<WorkoutDayTemplateResponseDto> days;

    public WorkoutWeekResponseDto(){

    }

    public WorkoutWeekResponseDto(
            UUID id,
            UUID planId,
            Integer weekNumber,
            LocalDateTime createdAt,
            LocalDateTime updatedAt) {

        this.id = id;
        this.planId = planId;
        this.weekNumber = weekNumber;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
