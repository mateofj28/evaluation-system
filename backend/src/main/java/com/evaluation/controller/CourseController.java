package com.evaluation.controller;

import com.evaluation.dto.CourseDTO;
import com.evaluation.dto.CreateCourseDTO;
import com.evaluation.model.Course;
import com.evaluation.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
    
    private final CourseService courseService;
    
    @GetMapping
    public ResponseEntity<List<CourseDTO>> getAllCourses() {
        return ResponseEntity.ok(courseService.getAllCourses());
    }
    
    @GetMapping("/active")
    public ResponseEntity<List<CourseDTO>> getActiveCourses() {
        return ResponseEntity.ok(courseService.getActiveCourses());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable Long id) {
        return ResponseEntity.ok(courseService.getCourseById(id));
    }
    
    @PostMapping
    public ResponseEntity<CourseDTO> createCourse(@RequestBody Course course) {
        return ResponseEntity.ok(courseService.createCourse(course));
    }
    
    @PostMapping("/with-modules")
    public ResponseEntity<CourseDTO> createCourseWithModules(@RequestBody CreateCourseDTO dto) {
        return ResponseEntity.ok(courseService.createCourseWithModules(dto));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<CourseDTO> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        return ResponseEntity.ok(courseService.updateCourse(id, course));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.ok().build();
    }
}
