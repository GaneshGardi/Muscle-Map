package com.example.muscle_map.mapper;

import com.example.muscle_map.Dto.UserRequestDto;
import com.example.muscle_map.Dto.UserResponseDto;
import com.example.muscle_map.entity.User;

public class UserMapper {

    // Mapping: UserRequestDto -> User Entity
    public static User toEntity(UserRequestDto dto) {

        User user = new User();

        // Mapping request DTO fields into entity
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());

        return user;
    }

    // Mapping: User Entity -> UserResponseDto
    public static UserResponseDto toResponseDto(User user) {

        UserResponseDto dto = new UserResponseDto();

        // Mapping entity fields into response DTO
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setCreatedAt(user.getCreatedAt());
        dto.setUpdatedAt(user.getUpdatedAt());

        return dto;
    }

}
