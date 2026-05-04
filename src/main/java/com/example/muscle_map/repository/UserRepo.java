package com.example.muscle_map.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.muscle_map.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, UUID>{

    // User findByEmail(String email);

}
