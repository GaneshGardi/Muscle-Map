package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.entity.User;
import com.example.muscle_map.entity.WorkoutPlan;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.repository.WorkoutPlanRepo;
import com.example.muscle_map.service.WorkoutPlanService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class WorkoutPlanServiceImpl implements WorkoutPlanService {

    private final UserRepo userRepo;
    private final WorkoutPlanRepo workoutPlanRepo;

    public WorkoutPlanServiceImpl(UserRepo userRepo, WorkoutPlanRepo workoutPlanRepo){
        this.userRepo = userRepo;
        this.workoutPlanRepo = workoutPlanRepo;
    }

    @Override
    @Transactional
    public WorkoutPlan createWorkoutPlan(WorkoutPlan workoutPlan, UUID userId) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        // Check if user already has workout plans
        boolean hasExistingPlans = workoutPlanRepo.existsByUserId(userId);

        if (!hasExistingPlans) {
            // First plan should be active
            workoutPlan.setActive(true);
        } else {
            // Other plans should always be inactive
            workoutPlan.setActive(false);
        }

        workoutPlan.setUserId(userId);
        workoutPlan.setUser(user);

        user.addWorkoutPlan(workoutPlan);

        return workoutPlanRepo.save(workoutPlan);
    }

    @Transactional
    @Override
    public WorkoutPlan switchWorkoutPlan(UUID newWorkoutPlanId, UUID userId) {

        //Check if plan exists
        WorkoutPlan plan = workoutPlanRepo.findById(newWorkoutPlanId)
                .orElseThrow(() -> new RuntimeException("No workout plan found with id: " + newWorkoutPlanId));

        if(!plan.getUserId().equals(userId)){
            throw new RuntimeException("This plan does not belong to you");
        }
        //Deactivate all Active workout plans
        workoutPlanRepo.deactivateAllPlansByUserId(userId);

        //active selected plan
        plan.setActive(true);
        plan.setStartedAt(LocalDateTime.now());

        return workoutPlanRepo.save(plan);
    }

    @Override
    public WorkoutPlan getWorkoutPlanById(UUID workoutId) {
        return workoutPlanRepo.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout plan not found with id: " + workoutId));
    }

    @Override
    public List<WorkoutPlan> getAllWorkoutPlansByUserId(UUID userId) {
        return workoutPlanRepo.findByUserId(userId);
    }

    @Override
    public List<WorkoutPlan> getActiveWorkoutPlansByUserId(UUID userId) {
        return workoutPlanRepo.findByUserIdAndIsActiveTrue(userId);
    }

    @Override
    public WorkoutPlan updateWorkoutPlan(UUID workoutId, WorkoutPlan workoutPlan) {

        WorkoutPlan existingPlan = getWorkoutPlanById(workoutId);

        existingPlan.setTitle(workoutPlan.getTitle());
        existingPlan.setDescription(workoutPlan.getDescription());
        existingPlan.setRepeatEnabled(workoutPlan.isRepeatEnabled());
        existingPlan.setRepeatForWeeks(workoutPlan.getRepeatForWeeks());

        // Handle active status change
        if (workoutPlan.isActive() && !existingPlan.isActive()) {
            // If user is activating this plan, deactivate others
            workoutPlanRepo.deactivateAllPlansByUserId(existingPlan.getUserId());
        }

        existingPlan.setActive(workoutPlan.isActive());

        return workoutPlanRepo.save(existingPlan);
    }

    @Override
    public void deleteWorkoutPlan(UUID workoutId) {

        WorkoutPlan workoutPlan = getWorkoutPlanById(workoutId);
        workoutPlanRepo.delete(workoutPlan);
    }
}
