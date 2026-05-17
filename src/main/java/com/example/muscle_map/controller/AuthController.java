package com.example.muscle_map.controller;

import com.example.muscle_map.Dto.AuthRequestDto;
import com.example.muscle_map.Dto.AuthResponseDto;
import com.example.muscle_map.Dto.LoginRequestDto;
import com.example.muscle_map.Dto.SignUpRequestDto;
import com.example.muscle_map.service.AuthService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }


    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDto> signup(@RequestBody SignUpRequestDto request){
        return ResponseEntity.ok(authService.signUp(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginRequestDto request){
        return ResponseEntity.ok(authService.login(request));

    }
}
