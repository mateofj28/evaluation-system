package com.evaluation.service;

import com.evaluation.dto.LeaderboardDTO;
import com.evaluation.model.CourseEnrollment;
import com.evaluation.repository.CourseEnrollmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaderboardService {
    
    private final CourseEnrollmentRepository enrollmentRepository;
    
    @Transactional(readOnly = true)
    public List<LeaderboardDTO> getLeaderboardByCourse(Long courseId) {
        List<CourseEnrollment> enrollments = enrollmentRepository
            .findLeaderboardByCourseId(courseId);
        
        List<LeaderboardDTO> leaderboard = new ArrayList<>();
        int rank = 1;
        
        for (CourseEnrollment enrollment : enrollments) {
            LeaderboardDTO dto = new LeaderboardDTO();
            dto.setUserId(enrollment.getUser().getId());
            dto.setUsername(enrollment.getUser().getUsername());
            dto.setFirstName(enrollment.getUser().getFirstName());
            dto.setLastName(enrollment.getUser().getLastName());
            dto.setCourseId(enrollment.getCourse().getId());
            dto.setCourseName(enrollment.getCourse().getName());
            dto.setScore(enrollment.getScore());
            dto.setMaxScore(enrollment.getMaxScore());
            
            double percentage = enrollment.getMaxScore() > 0 
                ? (double) enrollment.getScore() / enrollment.getMaxScore() * 100 
                : 0.0;
            dto.setPercentage(percentage);
            dto.setRank(rank++);
            
            leaderboard.add(dto);
        }
        
        return leaderboard;
    }
}
