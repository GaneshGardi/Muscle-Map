package com.example.muscle_map.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.muscle_map.entity.User;
import com.example.muscle_map.service.UserService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/add")
    public ResponseEntity<User> postMethodName(@RequestBody User user) {
       
        User createdUser = userService.addUser(user);
        if(createdUser != null){
        return new ResponseEntity<>(user, HttpStatus.valueOf(201));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<User> getMethodName(@PathVariable String id) {
        
        User user = userService.getUserById(id);
        
        return ResponseEntity.ok(user); 
    }

   
    
    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if(!users.isEmpty()){
            return new ResponseEntity<>(users, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    
}

}