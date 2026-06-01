package com.example.muscle_map.Dto;

import com.example.muscle_map.enums.DayType;
import lombok.Getter;
import lombok.Setter;


public class WorkoutDayTemplateRequestDto {

    private Integer dayOfWeek;           // 1 = Monday, 7 = Sunday
    private String title;
    private DayType dayType;
    private String restNoteTemplate;
    private Integer sortOrder;

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

    public DayType getDayType() {
        return dayType;
    }

    public void setDayType(DayType dayType) {
        this.dayType = dayType;
    }

    public String getRestNoteTemplate() {
        return restNoteTemplate;
    }

    public void setRestNoteTemplate(String restNoteTemplate) {
        this.restNoteTemplate = restNoteTemplate;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public WorkoutDayTemplateRequestDto(Integer dayOfWeek, String title, DayType dayType, String restNoteTemplate, Integer sortOrder) {
        this.dayOfWeek = dayOfWeek;
        this.title = title;
        this.dayType = dayType;
        this.restNoteTemplate = restNoteTemplate;
        this.sortOrder = sortOrder;
    }
}