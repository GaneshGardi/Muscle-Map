package com.example.muscle_map.service.serviceImpl;

import com.example.muscle_map.Dto.AuthRequestDto;
import com.example.muscle_map.Dto.AuthResponseDto;
import com.example.muscle_map.Dto.LoginRequestDto;
import com.example.muscle_map.Dto.SignUpRequestDto;
import com.example.muscle_map.entity.User;
import com.example.muscle_map.exceptions.BadRequestException;
import com.example.muscle_map.repository.UserRepo;
import com.example.muscle_map.security.JwtUtil;
import com.example.muscle_map.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private  final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(UserRepo userRepo, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtUtil jwtUtil){
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public AuthResponseDto signUp(SignUpRequestDto request) {
        // Basic validations
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new BadRequestException("Email is required");
        }
        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new BadRequestException("Password is required");
        }

        // Check if email already exists
        if (userRepo.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email already exists. Please use a different email.");
        }

        User user = new User();
        user.setName(request.getName() != null ? request.getName().trim() : "");
        user.setEmail(request.getEmail().trim());

        // Must encode password before saving
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        user.setPassword(encodedPassword);

        User savedUser = userRepo.save(user);

        System.out.println("✅ User created successfully with ID: " + savedUser.getId());

        String token = jwtUtil.generateToken(savedUser.getEmail());

        return new AuthResponseDto("User registered successfully!", token);
    }

    @Override
    public AuthResponseDto login(LoginRequestDto request) {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            String token = jwtUtil.generateToken(request.getEmail());

            return new AuthResponseDto("Login successful!", token);

        } catch (BadCredentialsException e) {
            throw new BadRequestException("Invalid email or password");
        }

    }
}
