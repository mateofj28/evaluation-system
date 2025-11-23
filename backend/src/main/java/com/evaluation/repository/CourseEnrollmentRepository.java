package com.evaluation.repository;

import com.evaluation.model.CourseEnrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Long> {
    List<CourseEnrollment> findByUserId(Long userId);
    List<CourseEnrollment> findByCourseId(Long courseId);
    Optional<CourseEnrollment> findByUserIdAndCourseId(Long userId, Long courseId);
    
    @Query("SELECT e FROM CourseEnrollment e WHERE e.course.id = :courseId " +
           "AND e.status = 'COMPLETED' ORDER BY e.score DESC, e.completedAt ASC")
    List<CourseEnrollment> findLeaderboardByCourseId(@Param("courseId") Long courseId);
}
