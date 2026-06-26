package com.example.muscle_map.service;


import com.example.muscle_map.Dto.UserOnboardingRequestDto;
import com.example.muscle_map.Dto.UserOnboardingResponseDto;

public interface UserOnboardingService {

    UserOnboardingResponseDto completeOnboarding(
            UserOnboardingRequestDto requestDto,
            String email);

    UserOnboardingResponseDto getMyOnboarding(
            String email);

    boolean isOnboardingCompleted(
            String email);
}