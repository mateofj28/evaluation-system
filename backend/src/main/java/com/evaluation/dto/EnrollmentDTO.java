package com.evaluation.dto;

import com.evaluation.model.CourseEnrollment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnrollmentDTO {
    private Long id;
    private Long userId;
    private Long courseId;
    private String courseName;
    private Integer score;
    private Integer maxScore;
    private CourseEnrollment.EnrollmentStatus status;
    private Double progressPercentage;
    private LocalDateTime enrolledAt;
    private LocalDateTime completedAt;
}
