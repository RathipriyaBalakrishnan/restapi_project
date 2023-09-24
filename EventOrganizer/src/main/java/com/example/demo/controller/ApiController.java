package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Eventdetails;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ApiController {

    @Autowired
    private UserService userService;

    @GetMapping("/booking")
    public List<Eventdetails> getAllEvents() {
        return userService.getAllEvents();
    }

    @GetMapping("/booking/{id}")
    public Eventdetails getEventById(@PathVariable Long id) {
        return userService.getEventid(id);
    }

    @PostMapping("/booking")
    public Eventdetails createEvent(@RequestBody Eventdetails event) {
        return userService.saveEvent(event);
    }

    @PutMapping("/booking/{id}")
    public Eventdetails updateEvent(@RequestBody Eventdetails event, @PathVariable Long id) {
        return userService.updateEvent(event, id);
    }

    @DeleteMapping("/booking/{id}")
    public void deleteEvent(@PathVariable Long id) {
        userService.deleteEvent(id);
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        // Validate the login using the UserService
        if (userService.validateLogin(user.getEmail(), user.getPword())) {
            return ResponseEntity.ok().body("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed. Please check your credentials.");
        }
    }
}