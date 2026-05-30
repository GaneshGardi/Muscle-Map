package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.WorkoutWeekRequestDto;
import com.example.muscle_map.Dto.WorkoutWeekResponseDto;
import com.example.muscle_map.security.SecurityUtils;
import com.example.muscle_map.service.WorkoutWeekService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workout-plans")
public class WorkoutWeekController {

    private final WorkoutWeekService workoutWeekService;

    public WorkoutWeekController(WorkoutWeekService workoutWeekService) {
        this.workoutWeekService = workoutWeekService;
    }

    /**
     * Create a new week inside a workout plan
     */
    @PostMapping("/{planId}/weeks")
    public ResponseEntity<WorkoutWeekResponseDto> createWorkoutWeek(
            @PathVariable UUID planId,
            @RequestBody WorkoutWeekRequestDto requestDto) {

        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        WorkoutWeekResponseDto response = workoutWeekService.createWorkoutWeek(planId, requestDto, email);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Get all weeks of a specific workout plan
     */
    @GetMapping("/{planId}/weeks")
    public ResponseEntity<List<WorkoutWeekResponseDto>> getWeeksByPlan(
            @PathVariable UUID planId) {

        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        List<WorkoutWeekResponseDto> weeks = workoutWeekService.getWeeksByPlanId(planId, email);
        return ResponseEntity.ok(weeks);
    }

    /**
     * Get single week by ID
     */
    @GetMapping("/weeks/{weekId}")
    public ResponseEntity<WorkoutWeekResponseDto> getWorkoutWeekById(@PathVariable UUID weekId) {

        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        WorkoutWeekResponseDto week = workoutWeekService.getWorkoutWeekById(weekId, email);
        return ResponseEntity.ok(week);
    }

    /**
     * Delete a week
     */
    @DeleteMapping("/weeks/{weekId}")
    public ResponseEntity<Void> deleteWorkoutWeek(@PathVariable UUID weekId) {

        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        workoutWeekService.deleteWorkoutWeek(weekId, email);
        return ResponseEntity.noContent().build();
    }
}