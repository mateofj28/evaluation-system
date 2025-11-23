package com.evaluation.controller;

import com.evaluation.dto.EnrollmentDTO;
import com.evaluation.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EnrollmentController {
    
    private final EnrollmentService enrollmentService;
    
    @PostMapping
    public ResponseEntity<EnrollmentDTO> enrollUser(
            @RequestParam Long userId, 
            @RequestParam Long courseId) {
        return ResponseEntity.ok(enrollmentService.enrollUserInCourse(userId, courseId));
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EnrollmentDTO>> getUserEnrollments(@PathVariable Long userId) {
        return ResponseEntity.ok(enrollmentService.getUserEnrollments(userId));
    }
}
