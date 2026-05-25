package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.dto.exercise.ExerciseTemplateRequestDto;
import com.example.muscle_map.dto.exercise.ExerciseTemplateResponseDto;
import com.example.muscle_map.entity.ExerciseTemplate;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.ExerciseTemplateMapper;
import com.example.muscle_map.repository.ExerciseTemplateRepo;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.service.ExerciseTemplateService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class ExerciseTemplateServiceImpl implements ExerciseTemplateService {

    private final ExerciseTemplateRepo exerciseRepo;
    private final UserRepo userRepo;
    private final ExerciseTemplateMapper mapper;

    public ExerciseTemplateServiceImpl(ExerciseTemplateRepo exerciseRepo,
                                       UserRepo userRepo,
                                       ExerciseTemplateMapper mapper) {
        this.exerciseRepo = exerciseRepo;
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    @Override
    public ExerciseTemplateResponseDto createExercise(ExerciseTemplateRequestDto requestDto, String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        if (exerciseRepo.existsByNameIgnoreCase(requestDto.getName())) {
            throw new BadRequestException("Exercise with this name already exists");
        }

        ExerciseTemplate exercise = mapper.toEntity(requestDto);
        exercise.setCreatedByUserId(user.getId());

        ExerciseTemplate saved = exerciseRepo.save(exercise);
        return mapper.toResponseDto(saved);
    }

    @Override
    public ExerciseTemplateResponseDto getExerciseById(UUID id) {
        ExerciseTemplate exercise = exerciseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Exercise not found"));
        return mapper.toResponseDto(exercise);
    }

    @Override
    public List<ExerciseTemplateResponseDto> getMyExercises(String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        return exerciseRepo.findByCreatedByUserId(user.getId())
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ExerciseTemplateResponseDto> getAllExercisesByUser(UUID userId) {
        return exerciseRepo.findByCreatedByUserId(userId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ExerciseTemplateResponseDto> getExercisesByMuscleGroup(String muscleGroup) {
        return exerciseRepo.findByMuscleGroup(muscleGroup)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public ExerciseTemplateResponseDto updateExercise(UUID id, ExerciseTemplateRequestDto requestDto, UUID userId) {
        ExerciseTemplate existing = exerciseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Exercise not found"));

        if (!existing.getCreatedByUserId().equals(userId)) {
            throw new BadRequestException("You can only update your own exercises");
        }

        existing.setName(requestDto.getName());
        existing.setMuscleGroup(requestDto.getMuscleGroup());
        existing.setEquipment(requestDto.getEquipment());

        ExerciseTemplate updated = exerciseRepo.save(existing);
        return mapper.toResponseDto(updated);
    }

    @Override
    public void deleteExercise(UUID id, UUID userId) {
        ExerciseTemplate exercise = exerciseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Exercise not found"));

        if (!exercise.getCreatedByUserId().equals(userId)) {
            throw new BadRequestException("You can only delete your own exercises");
        }

        exerciseRepo.delete(exercise);
    }
}