package com.example.muscle_map.Dto;

import com.example.muscle_map.enums.FitnessGoal;
import com.example.muscle_map.enums.Gender;
import com.example.muscle_map.enums.TrainingExperience;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserOnboardingResponseDto {

    private UUID id;

    private UUID userId;

    private Gender gender;

    private LocalDate birthDate;

    private Double weight;

    private Double height;

    private FitnessGoal goal;

    private TrainingExperience trainingExperience;

    private Boolean acceptedTerms;

    private Boolean completed;
}