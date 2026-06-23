package com.example.muscle_map.repository;

import com.example.muscle_map.entity.WorkoutWeek;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface WorkoutWeekRepo extends JpaRepository<WorkoutWeek, UUID> {

    List<WorkoutWeek> findByPlanId(UUID planId);

    boolean existsByPlanIdAndWeekNumber(UUID planId, Integer weekNumber);

    List<WorkoutWeek> findByPlanIdOrderByWeekNumber(UUID planId);
}