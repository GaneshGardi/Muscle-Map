package com.example.muscle_map.entity;

import com.example.muscle_map.enums.DayType;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "workout_day_templates")
public class WorkoutDayTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "week_id", nullable = false)
    private UUID weekId;

    @Column(name = "day_of_week", nullable = false)
    private Integer dayOfWeek;     // 1 = Monday, 7 = Sunday

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(name = "day_type", nullable = false)
    private DayType dayType;

    @Column(name = "rest_note_template", columnDefinition = "TEXT")
    private String restNoteTemplate;

    @Column(name = "sort_order")
    private Integer sortOrder;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "week_id", insertable = false, updatable = false)
    private WorkoutWeek workoutWeek;

    @OneToMany(mappedBy = "workoutDayTemplate", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<DayExerciseTemplate> dayExercises = new ArrayList<>();

    public WorkoutDayTemplate() {}

    // Getters and Setters...
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getWeekId() { return weekId; }
    public void setWeekId(UUID weekId) { this.weekId = weekId; }

    public Integer getDayOfWeek() { return dayOfWeek; }
    public void setDayOfWeek(Integer dayOfWeek) { this.dayOfWeek = dayOfWeek; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public DayType getDayType() { return dayType; }
    public void setDayType(DayType dayType) { this.dayType = dayType; }

    public String getRestNoteTemplate() { return restNoteTemplate; }
    public void setRestNoteTemplate(String restNoteTemplate) { this.restNoteTemplate = restNoteTemplate; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public WorkoutWeek getWorkoutWeek() { return workoutWeek; }
    public void setWorkoutWeek(WorkoutWeek workoutWeek) { this.workoutWeek = workoutWeek; }

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

    //helper methods
    public void addDayExercise(DayExerciseTemplate dayExercise) {
        this.dayExercises.add(dayExercise);
        dayExercise.setWorkoutDayTemplate(this);
    }

    public void removeDayExercise(DayExerciseTemplate dayExercise) {
        this.dayExercises.remove(dayExercise);
        dayExercise.setWorkoutDayTemplate(null);
    }
}