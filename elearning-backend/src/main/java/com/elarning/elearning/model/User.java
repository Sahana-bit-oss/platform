package com.elarning.elearning.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String role; // STUDENT, INSTRUCTOR, ADMIN

    @Column(nullable = false)
    private boolean isVerified = false;

    // New field for email verification
    @Column(unique = true)
    private String verificationToken;
}
