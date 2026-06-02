package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.DayExerciseTemplateRequestDto;
import com.example.muscle_map.Dto.DayExerciseTemplateResponseDto;
import com.example.muscle_map.entity.DayExerciseTemplate;
import org.springframework.stereotype.Component;

@Component
public class DayExerciseTemplateMapper {

    public DayExerciseTemplate toEntity(DayExerciseTemplateRequestDto dto) {
        DayExerciseTemplate entity = new DayExerciseTemplate();
        entity.setExerciseTemplateId(dto.getExerciseTemplateId());
        entity.setTargetSets(dto.getTargetSets());
        entity.setTargetReps(dto.getTargetReps());
        entity.setTargetWeight(dto.getTargetWeight());
        entity.setNotes(dto.getNotes());
        entity.setSortOrder(dto.getSortOrder());
        return entity;
    }

    public DayExerciseTemplateResponseDto toResponseDto(DayExerciseTemplate entity) {
        return new DayExerciseTemplateResponseDto(
                entity.getId(),
                entity.getDayTemplateId(),
                entity.getExerciseTemplateId(),
                entity.getTargetSets(),
                entity.getTargetReps(),
                entity.getTargetWeight(),
                entity.getNotes(),
                entity.getSortOrder(),
                entity.getCreatedAt()
        );
    }
}