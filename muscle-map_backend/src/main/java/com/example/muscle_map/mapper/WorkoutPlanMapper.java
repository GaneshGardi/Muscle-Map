package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.WorkoutPlanRequestDto;
import com.example.muscle_map.Dto.WorkoutPlanResponseDto;
import com.example.muscle_map.entity.WorkoutPlan;
import org.springframework.stereotype.Component;

@Component
public class WorkoutPlanMapper {

    public WorkoutPlan toEntity(WorkoutPlanRequestDto dto){
        WorkoutPlan entity = new WorkoutPlan();
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());
        entity.setRepeatEnabled(dto.getRepeatEnabled());
        entity.setRepeatForWeeks(dto.getRepeatForWeeks());
        entity.setActive(dto.getIsActive());
        return entity;
    }

    public WorkoutPlanResponseDto toResponseDto(WorkoutPlan entity){

        return new WorkoutPlanResponseDto(
                entity.getId(),
                entity.getUserId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.isRepeatEnabled(),
                entity.getRepeatForWeeks(),
                entity.isActive(),
                entity.getStartedAt(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
