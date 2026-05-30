package com.example.muscle_map.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "workout_weeks")
public class WorkoutWeek {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "plan_id", nullable = false)
    private UUID planId;

    @Column(name = "week_number", nullable = false)
    private Integer weekNumber;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // ==================== Relationship with WorkoutPlan ====================

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id", insertable = false, updatable = false)
    private WorkoutPlan workoutPlan;

    // ==================== Relationship with WorkoutDayTemplate (TEMPORARILY COMMENTED) ====================
    /*
    @OneToMany(mappedBy = "workoutWeek", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<WorkoutDayTemplate> workoutDayTemplates = new ArrayList<>();
    */

    // Constructors
    public WorkoutWeek() {}

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getPlanId() { return planId; }
    public void setPlanId(UUID planId) { this.planId = planId; }

    public Integer getWeekNumber() { return weekNumber; }
    public void setWeekNumber(Integer weekNumber) { this.weekNumber = weekNumber; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public WorkoutPlan getWorkoutPlan() { return workoutPlan; }
    public void setWorkoutPlan(WorkoutPlan workoutPlan) { this.workoutPlan = workoutPlan; }

    // We will uncomment and add helper methods when we create WorkoutDayTemplate
}