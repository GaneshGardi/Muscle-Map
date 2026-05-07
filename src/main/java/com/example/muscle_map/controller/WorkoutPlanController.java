package com.example.muscle_map.controller;

import com.example.muscle_map.entity.WorkoutPlan;
import com.example.muscle_map.service.WorkoutPlanService;
import org.apache.coyote.Response;
import org.hibernate.jdbc.Work;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workoutPlans")
public class WorkoutPlanController {

    private final WorkoutPlanService planService;

    public WorkoutPlanController(WorkoutPlanService planService){
        this.planService = planService;
    }


    @PostMapping("/createPlan")
    public ResponseEntity<WorkoutPlan> createPlan(@RequestBody WorkoutPlan workoutPlan,
                                                  @RequestParam UUID userId){

        WorkoutPlan createdPlan = planService.createWorkoutPlan(workoutPlan, userId);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    //Switch workout plan
    @PutMapping("/switchPlan")
    public ResponseEntity<WorkoutPlan> switchPlan(@RequestParam UUID userId, @RequestParam UUID newPlanId){

        WorkoutPlan currentPlan = planService.switchWorkoutPlan(userId, newPlanId);
        return ResponseEntity.ok(currentPlan);
    }

    @GetMapping("/getPlanById/{id}")
    public ResponseEntity<WorkoutPlan> getWorkoutPlan(@PathVariable UUID id) {
        return ResponseEntity.ok(planService.getWorkoutPlanById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<WorkoutPlan>> getUserWorkoutPlans(@PathVariable UUID userId) {
        return ResponseEntity.ok(planService.getAllWorkoutPlansByUserId(userId));
    }

    @GetMapping("/user/{userId}/active")
    public ResponseEntity<List<WorkoutPlan>> getActiveWorkoutPlans(@PathVariable UUID userId) {
        return ResponseEntity.ok(planService.getActiveWorkoutPlansByUserId(userId));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutPlan> updateWorkoutPlan(
            @PathVariable UUID id,
            @RequestBody WorkoutPlan updatedPlan) {

        return ResponseEntity.ok(planService.updateWorkoutPlan(id, updatedPlan));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable UUID id) {
        planService.deleteWorkoutPlan(id);
        return ResponseEntity.noContent().build();
    }




}
