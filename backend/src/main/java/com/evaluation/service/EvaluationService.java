package com.evaluation.service;

import com.evaluation.dto.AnswerSubmissionDTO;
import com.evaluation.dto.EvaluationResultDTO;
import com.evaluation.mapper.BadgeMapper;
import com.evaluation.model.*;
import com.evaluation.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EvaluationService {
    
    private final CourseEnrollmentRepository enrollmentRepository;
    private final QuestionRepository questionRepository;
    private final UserBadgeRepository userBadgeRepository;
    private final BadgeMapper badgeMapper;
    
    @Transactional
    public EvaluationResultDTO submitAnswers(AnswerSubmissionDTO submission) {
        CourseEnrollment enrollment = enrollmentRepository.findById(submission.getEnrollmentId())
            .orElseThrow(() -> new RuntimeException("Inscripción no encontrada"));
        
        Map<Long, String> answers = submission.getAnswers();
        int correctAnswers = 0;
        int totalQuestions = answers.size();
        int pointsEarned = 0;
        int maxPoints = 0;
        
        for (Map.Entry<Long, String> entry : answers.entrySet()) {
            Question question = questionRepository.findById(entry.getKey())
                .orElseThrow(() -> new RuntimeException("Pregunta no encontrada"));
            
            maxPoints += question.getPoints();
            
            if (question.getCorrectAnswer().equalsIgnoreCase(entry.getValue())) {
                correctAnswers++;
                pointsEarned += question.getPoints();
            }
        }
        
        enrollment.setScore(enrollment.getScore() + pointsEarned);
        enrollment.setMaxScore(enrollment.getMaxScore() + maxPoints);
        
        // Marcar como completado automáticamente
        enrollment.setStatus(CourseEnrollment.EnrollmentStatus.COMPLETED);
        enrollment.setCompletedAt(java.time.LocalDateTime.now());
        enrollment.setProgressPercentage(100.0);
        
        double percentage = (double) pointsEarned / maxPoints * 100;
        
        EvaluationResultDTO result = new EvaluationResultDTO();
        result.setCorrectAnswers(correctAnswers);
        result.setTotalQuestions(totalQuestions);
        result.setPointsEarned(pointsEarned);
        result.setMaxPoints(maxPoints);
        result.setPercentage(percentage);
        result.setPassed(percentage >= 70);
        
        Badge badge = enrollment.getCourse().getBadge();
        if (badge != null && enrollment.getScore() >= badge.getRequiredScore()) {
            if (!userBadgeRepository.findByUserIdAndBadgeId(
                enrollment.getUser().getId(), badge.getId()).isPresent()) {
                
                UserBadge userBadge = new UserBadge();
                userBadge.setUser(enrollment.getUser());
                userBadge.setBadge(badge);
                userBadgeRepository.save(userBadge);
                
                result.setBadgeEarned(badgeMapper.toDTO(badge));
            }
        }
        
        enrollmentRepository.save(enrollment);
        return result;
    }
    
    @Transactional
    public void completeCourse(Long enrollmentId) {
        CourseEnrollment enrollment = enrollmentRepository.findById(enrollmentId)
            .orElseThrow(() -> new RuntimeException("Inscripción no encontrada"));
        
        enrollment.setStatus(CourseEnrollment.EnrollmentStatus.COMPLETED);
        enrollment.setCompletedAt(LocalDateTime.now());
        enrollment.setProgressPercentage(100.0);
        
        enrollmentRepository.save(enrollment);
    }
}
