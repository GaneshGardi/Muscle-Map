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
        onboarding.setBirthDate(dto.getBirthDate());
        onboarding.setWeight(dto.getWeight());
        onboarding.setHeight(dto.getHeight());
        onboarding.setGoal(dto.getGoal());
        onboarding.setTrainingExperience(
                dto.getTrainingExperience());
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
        dto.setBirthDate(onboarding.getBirthDate());
        dto.setWeight(onboarding.getWeight());
        dto.setHeight(onboarding.getHeight());
        dto.setGoal(onboarding.getGoal());
        dto.setTrainingExperience(
                onboarding.getTrainingExperience());
        dto.setAcceptedTerms(
                onboarding.getAcceptedTerms());
        dto.setCompleted(
                onboarding.getCompleted());

        return dto;
    }
}