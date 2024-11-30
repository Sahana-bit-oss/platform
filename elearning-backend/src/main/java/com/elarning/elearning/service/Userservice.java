package com.elarning.elearning.service;

import com.elarning.elearning.model.User;
import com.elarning.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class Userservice {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Encrypt password
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        // Generate verification token
        String token = UUID.randomUUID().toString();
        user.setVerificationToken(token);

        // Mark the user as unverified initially
        user.setVerified(false);

        // Save the user to the database
        return userRepository.save(user);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getUserByVerificationToken(String token) {
        return userRepository.findByVerificationToken(token);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void verifyUser(String token) {
        // Find user by verification token
        Optional<User> userOptional = userRepository.findByVerificationToken(token);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Mark user as verified
            user.setVerified(true);

            // Remove the verification token
            user.setVerificationToken(null);

            // Save the updated user
            userRepository.save(user);
        } else {
            throw new RuntimeException("Invalid verification token.");
        }
    }
}
