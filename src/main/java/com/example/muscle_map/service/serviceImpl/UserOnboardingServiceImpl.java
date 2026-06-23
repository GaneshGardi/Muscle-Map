package com.example.muscle_map.service.serviceImpl;


import com.example.muscle_map.Dto.UserOnboardingRequestDto;
import com.example.muscle_map.Dto.UserOnboardingResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.UserOnboarding;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.UserOnboardingMapper;
import com.example.muscle_map.repository.UserOnboardingRepo;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.service.UserOnboardingService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserOnboardingServiceImpl
        implements UserOnboardingService {

    private final UserRepo userRepo;
    private final UserOnboardingRepo onboardingRepo;
    private final UserOnboardingMapper mapper;

    public UserOnboardingServiceImpl(
            UserRepo userRepo,
            UserOnboardingRepo onboardingRepo,
            UserOnboardingMapper mapper) {

        this.userRepo = userRepo;
        this.onboardingRepo = onboardingRepo;
        this.mapper = mapper;
    }

    @Override
    public UserOnboardingResponseDto completeOnboarding(
            UserOnboardingRequestDto requestDto,
            String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found"));

        if (onboardingRepo.existsByUserId(user.getId())) {
            throw new BadRequestException(
                    "Onboarding already completed");
        }

        if (!Boolean.TRUE.equals(
                requestDto.getAcceptedTerms())) {

            throw new BadRequestException(
                    "Terms must be accepted");
        }

        UserOnboarding onboarding =
                mapper.toEntity(requestDto);

        onboarding.setUserId(user.getId());
        onboarding.setCompleted(true);

        UserOnboarding saved =
                onboardingRepo.save(onboarding);

        return mapper.toResponseDto(saved);
    }

    @Override
    public UserOnboardingResponseDto getMyOnboarding(
            String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found"));

        UserOnboarding onboarding =
                onboardingRepo.findByUserId(user.getId())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Onboarding not found"));

        return mapper.toResponseDto(onboarding);
    }

    @Override
    public boolean isOnboardingCompleted(
            String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found"));

        return onboardingRepo.existsByUserId(
                user.getId());
    }
}