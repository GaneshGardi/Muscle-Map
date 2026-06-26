package com.example.muscle_map.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class WorkoutPlanDetailsResponseDto {

    private UUID id;
    private String title;
    private String description;

    private List<WorkoutWeekResponseDto> weeks;

    // getters setters
}
