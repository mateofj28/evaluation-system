package com.evaluation.service;

import com.evaluation.dto.EnrollmentDTO;
import com.evaluation.model.Course;
import com.evaluation.model.CourseEnrollment;
import com.evaluation.model.User;
import com.evaluation.repository.CourseEnrollmentRepository;
import com.evaluation.repository.CourseRepository;
import com.evaluation.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EnrollmentService {
    
    private final CourseEnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    
    @Transactional
    public EnrollmentDTO enrollUserInCourse(Long userId, Long courseId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Course course = courseRepository.findById(courseId)
            .orElseThrow(() -> new RuntimeException("Curso no encontrado"));
        
        if (enrollmentRepository.findByUserIdAndCourseId(userId, courseId).isPresent()) {
            throw new RuntimeException("El usuario ya está inscrito en este curso");
        }
        
        CourseEnrollment enrollment = new CourseEnrollment();
        enrollment.setUser(user);
        enrollment.setCourse(course);
        
        CourseEnrollment saved = enrollmentRepository.save(enrollment);
        return toDTO(saved);
    }
    
    @Transactional(readOnly = true)
    public List<EnrollmentDTO> getUserEnrollments(Long userId) {
        return enrollmentRepository.findByUserId(userId).stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }
    
    private EnrollmentDTO toDTO(CourseEnrollment enrollment) {
        EnrollmentDTO dto = new EnrollmentDTO();
        dto.setId(enrollment.getId());
        dto.setUserId(enrollment.getUser().getId());
        dto.setCourseId(enrollment.getCourse().getId());
        dto.setCourseName(enrollment.getCourse().getName());
        dto.setScore(enrollment.getScore());
        dto.setMaxScore(enrollment.getMaxScore());
        dto.setStatus(enrollment.getStatus());
        dto.setProgressPercentage(enrollment.getProgressPercentage());
        dto.setEnrolledAt(enrollment.getEnrolledAt());
        dto.setCompletedAt(enrollment.getCompletedAt());
        return dto;
    }
}
