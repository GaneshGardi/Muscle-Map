package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.WorkoutDayTemplateRequestDto;
import com.example.muscle_map.Dto.WorkoutDayTemplateResponseDto;
import com.example.muscle_map.security.SecurityUtils;
import com.example.muscle_map.service.WorkoutDayTemplateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workout-plans")
public class WorkoutDayTemplateController {

    private final WorkoutDayTemplateService dayService;

    public WorkoutDayTemplateController(WorkoutDayTemplateService dayService) {
        this.dayService = dayService;
    }

    @PostMapping("/weeks/{weekId}/days")
    public ResponseEntity<WorkoutDayTemplateResponseDto> createDay(
            @PathVariable UUID weekId,
            @RequestBody WorkoutDayTemplateRequestDto requestDto) {

        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        WorkoutDayTemplateResponseDto response = dayService.createWorkoutDay(weekId, requestDto, email);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/weeks/{weekId}/days")
    public ResponseEntity<List<WorkoutDayTemplateResponseDto>> getDaysByWeek(@PathVariable UUID weekId) {
        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(dayService.getDaysByWeekId(weekId, email));
    }

    @GetMapping("/days/{dayId}")
    public ResponseEntity<WorkoutDayTemplateResponseDto> getDayById(@PathVariable UUID dayId) {
        String email = SecurityUtils.getCurrentUserEmail();
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(dayService.getDayById(dayId, email));
    }
}