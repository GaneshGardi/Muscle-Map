package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.DayExerciseTemplateRequestDto;
import com.example.muscle_map.Dto.DayExerciseTemplateResponseDto;
import com.example.muscle_map.security.SecurityUtils;
import com.example.muscle_map.service.DayExerciseTemplateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workout-plans")
public class DayExerciseTemplateController {

    private final DayExerciseTemplateService dayExerciseService;

    public DayExerciseTemplateController(DayExerciseTemplateService dayExerciseService) {
        this.dayExerciseService = dayExerciseService;
    }

    /**
     * Add an exercise to a specific day
     */
    @PostMapping("/days/{dayTemplateId}/exercises")
    public ResponseEntity<DayExerciseTemplateResponseDto> addExerciseToDay(
            @PathVariable UUID dayTemplateId,
            @RequestBody DayExerciseTemplateRequestDto requestDto) {

        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        DayExerciseTemplateResponseDto response = dayExerciseService.addExerciseToDay(dayTemplateId, requestDto, email);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Get all exercises for a specific day
     */
    @GetMapping("/days/{dayTemplateId}/exercises")
    public ResponseEntity<List<DayExerciseTemplateResponseDto>> getExercisesByDay(@PathVariable UUID dayTemplateId) {

        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(dayExerciseService.getExercisesByDay(dayTemplateId, email));
    }

    /**
     * Update exercise in a day
     */
    @PutMapping("/day-exercises/{dayExerciseId}")
    public ResponseEntity<DayExerciseTemplateResponseDto> updateExerciseInDay(
            @PathVariable UUID dayExerciseId,
            @RequestBody DayExerciseTemplateRequestDto requestDto) {

        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(dayExerciseService.updateExerciseInDay(dayExerciseId, requestDto, email));
    }

    /**
     * Delete exercise from a day
     */
    @DeleteMapping("/day-exercises/{dayExerciseId}")
    public ResponseEntity<Void> deleteExerciseFromDay(@PathVariable UUID dayExerciseId) {

        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        dayExerciseService.deleteExerciseFromDay(dayExerciseId, email);
        return ResponseEntity.noContent().build();
    }
}