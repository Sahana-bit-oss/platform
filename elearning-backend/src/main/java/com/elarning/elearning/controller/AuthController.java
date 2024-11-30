package com.elarning.elearning.controller;

import com.elarning.elearning.model.User;
import com.elarning.elearning.service.Userservice;
import com.elarning.elearning.service.EmailNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private Userservice userService;

    @Autowired
    private EmailNotificationService emailNotificationService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Register the user
        User registeredUser = userService.registerUser(user);

        // Generate verification link
        String verificationLink = "http://localhost:8080/api/auth/verify?token=" + registeredUser.getVerificationToken();

        // Send email notification for verification
        emailNotificationService.sendNotification(
                registeredUser.getEmail(),  // Recipient email address
                "Email Verification - E-Learning Platform",  // Email subject
                "Hi " + registeredUser.getUsername() + ",\n\n"
                        + "Thank you for registering on the E-Learning platform! Please verify your email by clicking the link below:\n\n"
                        + verificationLink + "\n\n"
                        + "Best regards,\nE-Learning Team" // Email body
        );

        return ResponseEntity.ok("Registration successful. Please verify your email.");
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verifyUser(@RequestParam("token") String token) {
        // Verify the user's email
        try {
            userService.verifyUser(token);
            return ResponseEntity.ok("Email verified successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        return ResponseEntity.of(userService.getUserByUsername(username));
    }
}
