package com.evaluation.controller;

import com.evaluation.dto.AnswerSubmissionDTO;
import com.evaluation.dto.EvaluationResultDTO;
import com.evaluation.service.EvaluationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/evaluations")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EvaluationController {
    
    private final EvaluationService evaluationService;
    
    @PostMapping("/submit")
    public ResponseEntity<EvaluationResultDTO> submitAnswers(
            @RequestBody AnswerSubmissionDTO submission) {
        return ResponseEntity.ok(evaluationService.submitAnswers(submission));
    }
    
    @PostMapping("/complete/{enrollmentId}")
    public ResponseEntity<Void> completeCourse(@PathVariable Long enrollmentId) {
        evaluationService.completeCourse(enrollmentId);
        return ResponseEntity.ok().build();
    }
}
