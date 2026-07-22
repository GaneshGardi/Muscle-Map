package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.UserOnboardingRequestDto;
import com.example.muscle_map.Dto.UserOnboardingResponseDto;
import com.example.muscle_map.entity.UserOnboarding;
import org.springframework.stereotype.Component;

@Component
public class UserOnboardingMapper {

    public UserOnboarding toEntity(
            UserOnboardingRequestDto dto) {

        UserOnboarding onboarding =
                new UserOnboarding();

        onboarding.setGender(dto.getGender());
        onboarding.setHeight(dto.getHeight());
        onboarding.setWeight(dto.getWeight());
        onboarding.setBirthDate(dto.getBirthDate());
        onboarding.setFitnessGoal(dto.getFitnessGoal());
        onboarding.setAcceptedTerms(
                dto.getAcceptedTerms());

        return onboarding;
    }

    public UserOnboardingResponseDto toResponseDto(
            UserOnboarding onboarding) {

        UserOnboardingResponseDto dto =
                new UserOnboardingResponseDto();

        dto.setId(onboarding.getId());
        dto.setUserId(onboarding.getUserId());
        dto.setGender(onboarding.getGender());
        dto.setHeight(onboarding.getHeight());
        dto.setWeight(onboarding.getWeight());
        dto.setBirthDate(onboarding.getBirthDate());
        dto.setFitnessGoal(onboarding.getFitnessGoal());
        dto.setAcceptedTerms(
                onboarding.getAcceptedTerms());
        dto.setCompleted(
                onboarding.getCompleted());

        return dto;
    }
}