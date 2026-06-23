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

    public WorkoutDayTemplateResponseDto toResponseDto(
            WorkoutDayTemplate entity) {

        WorkoutDayTemplateResponseDto dto =
                new WorkoutDayTemplateResponseDto();

        dto.setId(entity.getId());
        dto.setWeekId(entity.getWeekId());
        dto.setDayOfWeek(entity.getDayOfWeek());
        dto.setTitle(entity.getTitle());
        dto.setDayType(entity.getDayType());
        dto.setRestNoteTemplate(entity.getRestNoteTemplate());
        dto.setSortOrder(entity.getSortOrder());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());

        return dto;
    }
}