package com.evaluation.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "course_enrollments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseEnrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
    
    private LocalDateTime enrolledAt;
    private LocalDateTime completedAt;
    
    private Integer score = 0;
    private Integer maxScore = 0;
    
    @Enumerated(EnumType.STRING)
    private EnrollmentStatus status = EnrollmentStatus.IN_PROGRESS;
    
    private Double progressPercentage = 0.0;
    
    @PrePersist
    protected void onCreate() {
        enrolledAt = LocalDateTime.now();
    }
    
    public enum EnrollmentStatus {
        IN_PROGRESS,
        COMPLETED,
        ABANDONED
    }
}
