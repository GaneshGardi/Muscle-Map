package com.example.muscle_map.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "workout_plans")
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;                 // ← This is very important

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "repeat_enabled", nullable = false)
    private boolean repeatEnabled = false;

    @Column(name = "repeat_for_weeks")
    private Integer repeatForWeeks;

    @Column(name = "is_active", nullable = false)
    private boolean isActive;

    @Column(name = "started_at")
    private LocalDateTime startedAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("workoutPlans")
    private User user;

    @OneToMany(mappedBy = "workoutPlan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<WorkoutWeek> workoutWeeks = new ArrayList<>();

//    helper methods
    public void addWorkoutWeek(WorkoutWeek workoutWeek) {
        this.workoutWeeks.add(workoutWeek);
        workoutWeek.setWorkoutPlan(this);
    }

    public void removeWorkoutWeek(WorkoutWeek workoutWeek) {
        this.workoutWeeks.remove(workoutWeek);
        workoutWeek.setWorkoutPlan(null);
    }

    // Constructors
    public WorkoutPlan() {}

    // ==================== Getters & Setters ====================

    public List<WorkoutWeek> getWorkoutWeeks() {
        return workoutWeeks;
    }

    public void setWorkoutWeeks(List<WorkoutWeek> workoutWeeks) {
        this.workoutWeeks = workoutWeeks;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getUserId() { return userId; }
    public void setUserId(UUID userId) { this.userId = userId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean isRepeatEnabled() { return repeatEnabled; }
    public void setRepeatEnabled(boolean repeatEnabled) { this.repeatEnabled = repeatEnabled; }

    public Integer getRepeatForWeeks() { return repeatForWeeks; }
    public void setRepeatForWeeks(Integer repeatForWeeks) { this.repeatForWeeks = repeatForWeeks; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public LocalDateTime getStartedAt() { return startedAt; }
    public void setStartedAt(LocalDateTime startedAt) { this.startedAt = startedAt; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}