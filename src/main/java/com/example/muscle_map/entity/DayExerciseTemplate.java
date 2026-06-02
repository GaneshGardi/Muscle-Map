package com.example.muscle_map.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "day_exercise_templates")
public class DayExerciseTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "day_template_id", nullable = false)
    private UUID dayTemplateId;

    @Column(name = "exercise_template_id", nullable = false)
    private UUID exerciseTemplateId;

    @Column(name = "target_sets")
    private Integer targetSets;

    @Column(name = "target_reps")
    private String targetReps;           // e.g., "8-12", "10", "AMRAP"

    @Column(name = "target_weight")
    private Double targetWeight;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "sort_order")
    private Integer sortOrder;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    // ==================== Relationships ====================

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_template_id", insertable = false, updatable = false)
    private WorkoutDayTemplate workoutDayTemplate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_template_id", insertable = false, updatable = false)
    private ExerciseTemplate exerciseTemplate;

    public DayExerciseTemplate() {}

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getDayTemplateId() { return dayTemplateId; }
    public void setDayTemplateId(UUID dayTemplateId) { this.dayTemplateId = dayTemplateId; }

    public UUID getExerciseTemplateId() { return exerciseTemplateId; }
    public void setExerciseTemplateId(UUID exerciseTemplateId) { this.exerciseTemplateId = exerciseTemplateId; }

    public Integer getTargetSets() { return targetSets; }
    public void setTargetSets(Integer targetSets) { this.targetSets = targetSets; }

    public String getTargetReps() { return targetReps; }
    public void setTargetReps(String targetReps) { this.targetReps = targetReps; }

    public Double getTargetWeight() { return targetWeight; }
    public void setTargetWeight(Double targetWeight) { this.targetWeight = targetWeight; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public Integer getSortOrder() { return sortOrder; }
    public void setSortOrder(Integer sortOrder) { this.sortOrder = sortOrder; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public WorkoutDayTemplate getWorkoutDayTemplate() { return workoutDayTemplate; }
    public void setWorkoutDayTemplate(WorkoutDayTemplate workoutDayTemplate) { this.workoutDayTemplate = workoutDayTemplate; }

    public ExerciseTemplate getExerciseTemplate() { return exerciseTemplate; }
    public void setExerciseTemplate(ExerciseTemplate exerciseTemplate) { this.exerciseTemplate = exerciseTemplate; }
}