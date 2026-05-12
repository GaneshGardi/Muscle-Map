package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.WorkoutPlanRequestDto;
import com.example.muscle_map.Dto.WorkoutPlanResponseDto;
import com.example.muscle_map.service.WorkoutPlanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workoutPlans")
public class WorkoutPlanController {

    private final WorkoutPlanService planService;

    public WorkoutPlanController(WorkoutPlanService planService) {
        this.planService = planService;
    }

    @PostMapping("/createPlan")
    public ResponseEntity<WorkoutPlanResponseDto> createPlan(
            @RequestBody WorkoutPlanRequestDto requestDTO,
            @RequestParam UUID userId) {

        WorkoutPlanResponseDto createdPlan = planService.createWorkoutPlan(requestDTO, userId);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    // Switch workout plan
    @PutMapping("/switchPlan")
    public ResponseEntity<WorkoutPlanResponseDto> switchPlan(
            @RequestParam UUID userId,
            @RequestParam UUID newPlanId) {

        WorkoutPlanResponseDto switchedPlan = planService.switchWorkoutPlan(newPlanId, userId);
        return ResponseEntity.ok(switchedPlan);
    }

    @GetMapping("/getPlanById/{id}")
    public ResponseEntity<WorkoutPlanResponseDto> getWorkoutPlan(@PathVariable UUID id) {
        return ResponseEntity.ok(planService.getWorkoutPlanById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<WorkoutPlanResponseDto>> getUserWorkoutPlans(@PathVariable UUID userId) {
        return ResponseEntity.ok(planService.getAllWorkoutPlansByUserId(userId));
    }

    @GetMapping("/user/{userId}/active")
    public ResponseEntity<List<WorkoutPlanResponseDto>> getActiveWorkoutPlans(@PathVariable UUID userId) {
        return ResponseEntity.ok(planService.getActiveWorkoutPlansByUserId(userId));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutPlanResponseDto> updateWorkoutPlan(
            @PathVariable UUID id,
            @RequestBody WorkoutPlanRequestDto requestDTO) {

        return ResponseEntity.ok(planService.updateWorkoutPlan(id, requestDTO));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable UUID id) {
        planService.deleteWorkoutPlan(id);
        return ResponseEntity.noContent().build();
    }
}