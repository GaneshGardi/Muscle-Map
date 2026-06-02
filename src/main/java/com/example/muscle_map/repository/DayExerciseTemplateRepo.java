package com.example.muscle_map.repository;

import com.example.muscle_map.entity.DayExerciseTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface DayExerciseTemplateRepo extends JpaRepository<DayExerciseTemplate, UUID> {

    List<DayExerciseTemplate> findByDayTemplateId(UUID dayTemplateId);

    List<DayExerciseTemplate> findByDayTemplateIdOrderBySortOrderAsc(UUID dayTemplateId);
}