package com.example.muscle_map.repository;

import com.example.muscle_map.entity.WorkoutDayTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface WorkoutDayTemplateRepo extends JpaRepository<WorkoutDayTemplate, UUID> {

    List<WorkoutDayTemplate> findByWeekId(UUID weekId);

    List<WorkoutDayTemplate> findByWeekIdOrderBySortOrderAsc(UUID weekId);
}