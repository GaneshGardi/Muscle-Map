package com.example.muscle_map.Dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WorkoutPlanRequestDto {

    private String title;
    private String description;
    private Boolean repeatEnabled;
    private Integer repeatForWeeks;
    private Boolean isActive;
}
