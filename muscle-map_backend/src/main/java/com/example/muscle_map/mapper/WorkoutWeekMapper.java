package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.WorkoutWeekRequestDto;
import com.example.muscle_map.Dto.WorkoutWeekResponseDto;
import com.example.muscle_map.entity.WorkoutWeek;
import org.springframework.stereotype.Component;

@Component
public class WorkoutWeekMapper {

    public WorkoutWeek toEntity(WorkoutWeekRequestDto dto) {
        WorkoutWeek entity = new WorkoutWeek();
        entity.setWeekNumber(dto.getWeekNumber());
        return entity;
    }

    public WorkoutWeekResponseDto toResponseDto(WorkoutWeek entity) {
        return new WorkoutWeekResponseDto(
                entity.getId(),
                entity.getPlanId(),
                entity.getWeekNumber(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}