package com.elarning.elearning.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private String instructor;

    @Column(nullable = false)
    private int duration; // Duration in hours
}
