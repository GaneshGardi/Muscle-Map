package com.example.muscle_map.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.muscle_map.Dto.UserRequestDto;
import com.example.muscle_map.Dto.UserResponseDto;
import com.example.muscle_map.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    // Constructor Injection
    public UserController(UserService userService) {
        this.userService = userService;
    }

   //Create new user
    //NOT NEEDED AFTER ADDING AUTH, USER WILL BE ADDED FROM AUTH ONLY
//    @PostMapping("/add")
//    public ResponseEntity<UserResponseDto> addUser(@RequestBody UserRequestDto userDto) {
//
//        UserResponseDto createdUser = userService.addUser(userDto);
//
//        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
//    }

    //Get user by ID    
    @GetMapping("/getUserById/{id}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable String id) {

        UserResponseDto user = userService.getUserById(id);

        return ResponseEntity.ok(user);
    }

   //Get all users
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserResponseDto>> getAllUsers() {

        List<UserResponseDto> users = userService.getAllUsers();

        return ResponseEntity.ok(users);
    }

    //Test endpoint
    @GetMapping("/test")
    public String testEndPoint(){
        System.out.println("Test endpoint hit!");
        return "Test endpoint hit!";
    }

   //Get user by Email
   @GetMapping("/getUserByEmail")
   public ResponseEntity<UserResponseDto> getUserByEmail(@RequestParam String email) {

         System.out.println("EMAIL RECEIVED: [" + email + "]");

       UserResponseDto user = userService.getUserByEmail(email);

       return ResponseEntity.ok(user);
   }

   //Update User by ID
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<UserResponseDto> updateUser(@PathVariable String id,
                                                      @RequestBody UserRequestDto userDto) {

        UserResponseDto updatedUser = userService.updateUser(id, userDto);

        return ResponseEntity.ok(updatedUser);
    }

    //Delete User by ID
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id) {

        userService.deleteUser(id);

        return ResponseEntity.ok("User deleted successfully with id: " + id);
    }
}