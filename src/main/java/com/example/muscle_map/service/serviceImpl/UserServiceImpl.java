package com.example.muscle_map.service.serviceImpl;

import java.util.List;
import java.util.Optional;
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

      //Add user
    @Override
    public User addUser(User user) {
  
        userRepo.save(user);
        return user;
    }

  //Get user by email
    @Override
    public Optional<User> getUserByEmail(String email) {
  
        return userRepo.findByEmail(email);
        
    }

    //Get all users
    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    //Get user by id
    @Override
    public User getUserById(String id) {
  
        UUID uuid = UUID.fromString(id);
        return userRepo.findById(uuid).orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        
    }


    //Update user
    @Override
    public User updateUser(String id, User user) {

        UUID uuid = UUID.fromString(id);

        User existintgUser = userRepo.findById(uuid)
            .orElseThrow(() -> new RuntimeException("User not found with id: " + uuid));

        existintgUser.setName(user.getName());
        existintgUser.setEmail(user.getEmail());    
        existintgUser.setPassword(user.getPassword());

        return userRepo.save(existintgUser);   
    }


    //delete user
    @Override
    public void deleteUser(String id) {

        UUID uuid = UUID.fromString(id);
        
       User existingUser = userRepo.findById(uuid)
            .orElseThrow(() -> new RuntimeException("User not found with id: " + uuid));

        userRepo.delete(existingUser);
    }



}
