package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.WorkoutDayTemplateRequestDto;
import com.example.muscle_map.Dto.WorkoutDayTemplateResponseDto;
import com.example.muscle_map.entity.WorkoutDayTemplate;
import org.springframework.stereotype.Component;

@Component
public class WorkoutDayTemplateMapper {

    public WorkoutDayTemplate toEntity(WorkoutDayTemplateRequestDto dto) {
        WorkoutDayTemplate entity = new WorkoutDayTemplate();
        entity.setDayOfWeek(dto.getDayOfWeek());
        entity.setTitle(dto.getTitle());
        entity.setDayType(dto.getDayType());
        entity.setRestNoteTemplate(dto.getRestNoteTemplate());
        entity.setSortOrder(dto.getSortOrder() != null ? dto.getSortOrder() : 0);
        return entity;
    }

    public WorkoutDayTemplateResponseDto toResponseDto(WorkoutDayTemplate entity) {
        return new WorkoutDayTemplateResponseDto(
                entity.getId(),
                entity.getWeekId(),
                entity.getDayOfWeek(),
                entity.getTitle(),
                entity.getDayType(),
                entity.getRestNoteTemplate(),
                entity.getSortOrder(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}