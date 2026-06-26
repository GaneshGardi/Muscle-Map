package com.example.muscle_map.repository;

import com.example.muscle_map.entity.UserOnboarding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserOnboardingRepo extends JpaRepository<UserOnboarding, UUID> {


    Optional<UserOnboarding> findByUserId(UUID userId);

    boolean existsByUserId(UUID userId);

}
