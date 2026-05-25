package com.example.muscle_map.mapper;

import com.example.muscle_map.dto.exercise.ExerciseTemplateRequestDto;
import com.example.muscle_map.dto.exercise.ExerciseTemplateResponseDto;
import com.example.muscle_map.entity.ExerciseTemplate;
import org.springframework.stereotype.Component;

@Component
public class ExerciseTemplateMapper {

    public ExerciseTemplate toEntity(ExerciseTemplateRequestDto dto) {
        ExerciseTemplate entity = new ExerciseTemplate();
        entity.setName(dto.getName());
        entity.setMuscleGroup(dto.getMuscleGroup());
        entity.setEquipment(dto.getEquipment());
        return entity;
    }

    public ExerciseTemplateResponseDto toResponseDto(ExerciseTemplate entity) {
        return new ExerciseTemplateResponseDto(
                entity.getId(),
                entity.getName(),
                entity.getMuscleGroup(),
                entity.getEquipment(),
                entity.getCreatedByUserId(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}