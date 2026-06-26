package com.example.muscle_map.Dto;

import com.example.muscle_map.enums.DayType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
public class WorkoutDayTemplateResponseDto {

    private UUID id;
    private UUID weekId;
    private Integer dayOfWeek;
    private String title;
    private DayType dayType;
    private String restNoteTemplate;
    private Integer sortOrder;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private List<DayExerciseTemplateResponseDto> exercises;


}