package com.example.muscle_map.service.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.muscle_map.Dto.UserRequestDto;
import com.example.muscle_map.Dto.UserResponseDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.mapper.UserMapper;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserResponseDto addUser(UserRequestDto userDto) {

        // Convert request DTO into entity (because DB stores entity)
        User userEntity = UserMapper.toEntity(userDto);

        // Save user into database
        User savedUser = userRepo.save(userEntity);

        // Convert saved entity into response DTO (safe response without password)
        return UserMapper.toResponseDto(savedUser);
    }

    @Override
    public UserResponseDto getUserByEmail(String email) {

        // email = email.trim();

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        return UserMapper.toResponseDto(user);
    }

    @Override
    public List<UserResponseDto> getAllUsers() {

        List<User> users = userRepo.findAll();

        // Convert list of entities into list of response DTOs
        return users.stream()
                .map(UserMapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponseDto getUserById(String id) {
        UUID uuid = UUID.fromString(id);

        User user = userRepo.findById(uuid)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        return UserMapper.toResponseDto(user);
    }

    @Override
    public UserResponseDto updateUser(String id, UserRequestDto userDto) {

        UUID uuid = UUID.fromString(id);

        User existinguser = userRepo.findById(uuid)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        // Update entity fields with new values from request DTO
        existinguser.setName(userDto.getName());
        existinguser.setEmail(userDto.getEmail());
        existinguser.setPassword(userDto.getPassword());

        User updatedUser = userRepo.save(existinguser);

        return UserMapper.toResponseDto(updatedUser);

    }

    @Override
    public void deleteUser(String id) {

        UUID uuid = UUID.fromString(id);

        User existingUser = userRepo.findById(uuid)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        userRepo.delete(existingUser);
    }

}
