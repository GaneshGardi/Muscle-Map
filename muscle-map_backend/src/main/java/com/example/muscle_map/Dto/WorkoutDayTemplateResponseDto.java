package com.example.muscle_map.Dto;

import com.example.muscle_map.enums.DayType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;


public class WorkoutDayTemplateResponseDto {

    private UUID id;
    private UUID weekId;
    private Integer dayOfWeek;
    private String title;
    private DayType dayType;
    private String restNoteTemplate;
    private Integer sortOrder;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getWeekId() {
        return weekId;
    }

    public void setWeekId(UUID weekId) {
        this.weekId = weekId;
    }

    public Integer getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(Integer dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRestNoteTemplate() {
        return restNoteTemplate;
    }

    public void setRestNoteTemplate(String restNoteTemplate) {
        this.restNoteTemplate = restNoteTemplate;
    }

    public DayType getDayType() {
        return dayType;
    }

    public void setDayType(DayType dayType) {
        this.dayType = dayType;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public WorkoutDayTemplateResponseDto(
            UUID id,
            UUID weekId,
            Integer dayOfWeek,
            String title,
            DayType dayType,
            String restNoteTemplate,
            Integer sortOrder,
            LocalDateTime createdAt,
            LocalDateTime updatedAt) {

        this.id = id;
        this.weekId = weekId;
        this.dayOfWeek = dayOfWeek;
        this.title = title;
        this.dayType = dayType;
        this.restNoteTemplate = restNoteTemplate;
        this.sortOrder = sortOrder;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}