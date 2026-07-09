package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.UserOnboardingRequestDto;
import com.example.muscle_map.Dto.UserOnboardingResponseDto;
import com.example.muscle_map.security.SecurityUtils;
import com.example.muscle_map.service.UserOnboardingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/onboarding")
public class UserOnboardingController {

    private final UserOnboardingService onboardingService;

    public UserOnboardingController(
            UserOnboardingService onboardingService) {

        this.onboardingService = onboardingService;
    }

    @PostMapping("/complete")
    public ResponseEntity<UserOnboardingResponseDto>
    completeOnboarding(
            @RequestBody
            UserOnboardingRequestDto requestDto) {

        String email =
                SecurityUtils.getCurrentUserEmail();

        return ResponseEntity.ok(
                onboardingService.completeOnboarding(
                        requestDto,
                        email));
    }

    @GetMapping("/me")
    public ResponseEntity<UserOnboardingResponseDto>
    getMyOnboarding() {

        String email =
                SecurityUtils.getCurrentUserEmail();

        return ResponseEntity.ok(
                onboardingService.getMyOnboarding(
                        email));
    }

    @GetMapping("/status")
    public ResponseEntity<Boolean>
    getStatus() {

        String email =
                SecurityUtils.getCurrentUserEmail();

        return ResponseEntity.ok(
                onboardingService
                        .isOnboardingCompleted(email));
    }
}