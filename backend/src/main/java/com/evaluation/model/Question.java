package com.evaluation.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "questions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 1000)
    private String questionText;
    
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    
    @Column(nullable = false)
    private String correctAnswer; // A, B, C, D
    
    private Integer points = 1;
    
    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;
}
