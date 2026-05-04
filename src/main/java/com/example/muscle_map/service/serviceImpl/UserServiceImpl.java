package com.example.muscle_map.service.serviceImpl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.muscle_map.entity.User;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.service.UserService;

import jakarta.persistence.Id;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepo userRepo;

    @Override
    public User addUser(User user) {
  
        userRepo.save(user);
        return user;
    }

    @Override
    public User getUserByEmail(String email) {
  
        throw new UnsupportedOperationException("Unimplemented method 'getUserByEmail'");
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User getUserById(String id) {
  
        UUID uuid = UUID.fromString(id);
        return userRepo.findById(uuid).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        
    }

    @Override
    public User updateUser(String id, User user) {

        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void deleteUser(String id) {
        
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }



}
