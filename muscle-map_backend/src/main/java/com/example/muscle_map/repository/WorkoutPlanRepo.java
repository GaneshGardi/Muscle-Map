package com.example.muscle_map.repository;

import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Transactional
@Repository
public interface WorkoutPlanRepo extends JpaRepository<WorkoutPlan, UUID> {

    List<WorkoutPlan> findByUserId(UUID userId);

    @Query("SELECT w FROM WorkoutPlan w WHERE w.userId = :userId AND w.isActive = true")
    Optional<WorkoutPlan> findActivePlanByUserId(@Param("userId") UUID userId);

    List<WorkoutPlan> findByUserIdAndIsActiveFalse(UUID userId);

    boolean existsByUserId(UUID userId);

    boolean existsByUserIdAndTitleIgnoreCase(UUID userId, String title);

    @Modifying
    @Query("UPDATE WorkoutPlan wp SET wp.isActive = false WHERE wp.userId = :userId")
    void deactivateAllPlansByUserId(@Param("userId") UUID userId);

    UUID user(User user);
}
