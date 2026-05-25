package com.example.muscle_map.repository;

import com.example.muscle_map.entity.ExerciseTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ExerciseTemplateRepo extends JpaRepository<ExerciseTemplate, UUID> {

    List<ExerciseTemplate> findByCreatedByUserId(UUID userId);

    List<ExerciseTemplate> findByMuscleGroup(String muscleGroup);

    boolean existsByNameIgnoreCase(String name);
}