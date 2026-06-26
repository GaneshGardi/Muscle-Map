package com.example.muscle_map.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.muscle_map.entity.User;


@Repository
public interface UserRepo extends JpaRepository<User, UUID>{

    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    String email(String email);
}
