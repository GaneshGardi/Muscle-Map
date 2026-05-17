package com.example.muscle_map.service;

import com.example.muscle_map.Dto.AuthRequestDto;
import com.example.muscle_map.Dto.AuthResponseDto;
import com.example.muscle_map.Dto.LoginRequestDto;
import com.example.muscle_map.Dto.SignUpRequestDto;

public interface AuthService {

    AuthResponseDto signUp(SignUpRequestDto request);
    AuthResponseDto login(LoginRequestDto request);
}
