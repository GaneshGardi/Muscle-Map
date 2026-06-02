package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.DayExerciseTemplateRequestDto;
import com.example.muscle_map.Dto.DayExerciseTemplateResponseDto;
import com.example.muscle_map.entity.DayExerciseTemplate;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutDayTemplate;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.DayExerciseTemplateMapper;
import com.example.muscle_map.repository.DayExerciseTemplateRepo;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.repository.WorkoutDayTemplateRepo;
import com.example.muscle_map.service.DayExerciseTemplateService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class DayExerciseTemplateServiceImpl implements DayExerciseTemplateService {

    private final DayExerciseTemplateRepo dayExerciseRepo;
    private final WorkoutDayTemplateRepo dayTemplateRepo;
    private final UserRepo userRepo;
    private final DayExerciseTemplateMapper mapper;

    public DayExerciseTemplateServiceImpl(DayExerciseTemplateRepo dayExerciseRepo,
                                          WorkoutDayTemplateRepo dayTemplateRepo,
                                          UserRepo userRepo,
                                          DayExerciseTemplateMapper mapper) {
        this.dayExerciseRepo = dayExerciseRepo;
        this.dayTemplateRepo = dayTemplateRepo;
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    @Override
    public DayExerciseTemplateResponseDto addExerciseToDay(UUID dayTemplateId,
                                                           DayExerciseTemplateRequestDto requestDto,
                                                           String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        WorkoutDayTemplate dayTemplate = dayTemplateRepo.findById(dayTemplateId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout day not found with id: " + dayTemplateId));

        // Convert DTO to Entity
        DayExerciseTemplate dayExercise = mapper.toEntity(requestDto);
        dayExercise.setDayTemplateId(dayTemplateId);

        // Save first
        DayExerciseTemplate savedExercise = dayExerciseRepo.save(dayExercise);

        // Maintain bidirectional relationship
        dayTemplate.addDayExercise(savedExercise);

        return mapper.toResponseDto(savedExercise);
    }

    @Override
    public List<DayExerciseTemplateResponseDto> getExercisesByDay(UUID dayTemplateId, String email) {
        return dayExerciseRepo.findByDayTemplateIdOrderBySortOrderAsc(dayTemplateId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public DayExerciseTemplateResponseDto updateExerciseInDay(UUID dayExerciseId,
                                                              DayExerciseTemplateRequestDto requestDto,
                                                              String email) {

        DayExerciseTemplate existing = dayExerciseRepo.findById(dayExerciseId)
                .orElseThrow(() -> new ResourceNotFoundException("Exercise in day not found"));

        existing.setTargetSets(requestDto.getTargetSets());
        existing.setTargetReps(requestDto.getTargetReps());
        existing.setTargetWeight(requestDto.getTargetWeight());
        existing.setNotes(requestDto.getNotes());
        existing.setSortOrder(requestDto.getSortOrder());

        DayExerciseTemplate updated = dayExerciseRepo.save(existing);
        return mapper.toResponseDto(updated);
    }

    @Override
    public void deleteExerciseFromDay(UUID dayExerciseId, String email) {
        DayExerciseTemplate dayExercise = dayExerciseRepo.findById(dayExerciseId)
                .orElseThrow(() -> new ResourceNotFoundException("Exercise in day not found"));

        dayExerciseRepo.delete(dayExercise);
    }
}