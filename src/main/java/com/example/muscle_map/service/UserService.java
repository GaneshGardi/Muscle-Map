package com.example.muscle_map.service;

import java.util.List;


import com.example.muscle_map.Dto.UserRequestDto;
import com.example.muscle_map.Dto.UserResponseDto;


public interface UserService {

    UserResponseDto addUser(UserRequestDto userDto);

    UserResponseDto getUserByEmail(String email);

    List<UserResponseDto> getAllUsers();

    UserResponseDto getUserById(String id);

    UserResponseDto updateUser(String id, UserRequestDto userDto);

    void deleteUser(String id);

}
