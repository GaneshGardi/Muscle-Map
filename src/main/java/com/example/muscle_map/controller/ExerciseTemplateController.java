package com.example.muscle_map.controller;

import com.example.muscle_map.dto.exercise.ExerciseTemplateRequestDto;
import com.example.muscle_map.dto.exercise.ExerciseTemplateResponseDto;
import com.example.muscle_map.security.SecurityUtils;
import com.example.muscle_map.service.ExerciseTemplateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseTemplateController {

    private final ExerciseTemplateService exerciseService;

    public ExerciseTemplateController(ExerciseTemplateService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping
    public ResponseEntity<ExerciseTemplateResponseDto> createExercise(
            @RequestBody ExerciseTemplateRequestDto requestDto) {

        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        ExerciseTemplateResponseDto response = exerciseService.createExercise(requestDto, email);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/my")
    public ResponseEntity<List<ExerciseTemplateResponseDto>> getMyExercises() {
        String email = SecurityUtils.getCurrentUserEmail();

        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        List<ExerciseTemplateResponseDto> exercises = exerciseService.getMyExercises(email);
        return ResponseEntity.ok(exercises);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseTemplateResponseDto> getExerciseById(@PathVariable UUID id) {
        return ResponseEntity.ok(exerciseService.getExerciseById(id));
    }

    @GetMapping("/muscle-group/{muscleGroup}")
    public ResponseEntity<List<ExerciseTemplateResponseDto>> getByMuscleGroup(@PathVariable String muscleGroup) {
        return ResponseEntity.ok(exerciseService.getExercisesByMuscleGroup(muscleGroup));
    }

    // Temporary helper - Replace this with proper implementation soon
    private UUID getUserIdFromEmail(String email) {
        // TODO: Inject UserRepo and fetch userId properly
        throw new UnsupportedOperationException("getUserIdFromEmail not implemented yet");
    }
}