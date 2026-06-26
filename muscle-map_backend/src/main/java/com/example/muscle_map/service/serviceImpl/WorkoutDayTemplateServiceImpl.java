package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.WorkoutDayTemplateRequestDto;
import com.example.muscle_map.Dto.WorkoutDayTemplateResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutWeek;
import com.example.muscle_map.entity.WorkoutDayTemplate;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.exceptions.ResourceNotFoundException;
import com.example.muscle_map.mapper.WorkoutDayTemplateMapper;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.repository.WorkoutWeekRepo;
import com.example.muscle_map.repository.WorkoutDayTemplateRepo;
import com.example.muscle_map.service.WorkoutDayTemplateService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkoutDayTemplateServiceImpl implements WorkoutDayTemplateService {

    private final WorkoutDayTemplateRepo dayRepo;
    private final WorkoutWeekRepo weekRepo;
    private final UserRepo userRepo;
    private final WorkoutDayTemplateMapper mapper;

    public WorkoutDayTemplateServiceImpl(WorkoutDayTemplateRepo dayRepo,
                                         WorkoutWeekRepo weekRepo,
                                         UserRepo userRepo,
                                         WorkoutDayTemplateMapper mapper) {
        this.dayRepo = dayRepo;
        this.weekRepo = weekRepo;
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    @Override
    public WorkoutDayTemplateResponseDto createWorkoutDay(UUID weekId,
                                                          WorkoutDayTemplateRequestDto requestDto,
                                                          String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

        WorkoutWeek week = weekRepo.findById(weekId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout week not found with id: " + weekId));

        WorkoutDayTemplate day = mapper.toEntity(requestDto);
        day.setWeekId(weekId);

        // Save the day
        WorkoutDayTemplate savedDay = dayRepo.save(day);

        // Update the relationship
        savedDay.setWorkoutWeek(week);
        week.getWorkoutDayTemplates().add(savedDay);

        return mapper.toResponseDto(savedDay);
    }
    @Override
    public List<WorkoutDayTemplateResponseDto> getDaysByWeekId(UUID weekId, String email) {
        return dayRepo.findByWeekIdOrderBySortOrderAsc(weekId)
                .stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutDayTemplateResponseDto getDayById(UUID dayId, String email) {
        WorkoutDayTemplate day = dayRepo.findById(dayId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout day not found"));
        return mapper.toResponseDto(day);
    }

    @Override
    public WorkoutDayTemplateResponseDto updateWorkoutDay(UUID dayId,
                                                          WorkoutDayTemplateRequestDto requestDto,
                                                          String email) {
        WorkoutDayTemplate existing = dayRepo.findById(dayId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout day not found"));

        existing.setTitle(requestDto.getTitle());
        existing.setDayType(requestDto.getDayType());
        existing.setRestNoteTemplate(requestDto.getRestNoteTemplate());
        existing.setSortOrder(requestDto.getSortOrder());

        WorkoutDayTemplate updated = dayRepo.save(existing);
        return mapper.toResponseDto(updated);
    }

    @Override
    public void deleteWorkoutDay(UUID dayId, String email) {
        WorkoutDayTemplate day = dayRepo.findById(dayId)
                .orElseThrow(() -> new ResourceNotFoundException("Workout day not found"));
        dayRepo.delete(day);
    }
}