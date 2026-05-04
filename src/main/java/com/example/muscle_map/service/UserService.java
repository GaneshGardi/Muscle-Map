package com.example.muscle_map.service;

import java.util.List;

import com.example.muscle_map.entity.User;

public interface UserService {

    User addUser(User user);   

    User getUserByEmail(String email);

    List<User> getAllUsers();

    User getUserById(String id);

    User updateUser(String id, User user);

    void deleteUser(String id);

}
