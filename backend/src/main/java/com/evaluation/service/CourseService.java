package com.evaluation.service;

import com.evaluation.dto.CourseDTO;
import com.evaluation.dto.CreateCourseDTO;
import com.evaluation.mapper.CourseMapper;
import com.evaluation.model.Badge;
import com.evaluation.model.Course;
import com.evaluation.model.Question;
import com.evaluation.repository.BadgeRepository;
import com.evaluation.repository.CourseRepository;
import com.evaluation.repository.ModuleRepository;
import com.evaluation.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    
    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;
    private final BadgeRepository badgeRepository;
    private final ModuleRepository moduleRepository;
    private final QuestionRepository questionRepository;
    
    @Transactional(readOnly = true)
    public List<CourseDTO> getAllCourses() {
        return courseMapper.toDTOList(courseRepository.findAll());
    }
    
    @Transactional(readOnly = true)
    public List<CourseDTO> getActiveCourses() {
        return courseMapper.toDTOList(courseRepository.findByActiveTrue());
    }
    
    @Transactional(readOnly = true)
    public CourseDTO getCourseById(Long id) {
        Course course = courseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Curso no encontrado"));
        return courseMapper.toDTO(course);
    }
    
    @Transactional
    public CourseDTO createCourse(Course course) {
        Course savedCourse = courseRepository.save(course);
        return courseMapper.toDTO(savedCourse);
    }
    
    @Transactional
    public CourseDTO createCourseWithModules(CreateCourseDTO dto) {
        Course course = new Course();
        course.setName(dto.getName());
        course.setDescription(dto.getDescription());
        course.setDuration(dto.getDuration());
        course.setActive(true);
        
        if (dto.getBadgeId() != null) {
            Badge badge = badgeRepository.findById(dto.getBadgeId()).orElse(null);
            course.setBadge(badge);
        }
        
        Course savedCourse = courseRepository.save(course);
        
        if (dto.getModules() != null) {
            for (var moduleDto : dto.getModules()) {
                com.evaluation.model.Module module = new com.evaluation.model.Module();
                module.setName(moduleDto.getName());
                module.setContent(moduleDto.getContent());
                module.setOrderIndex(moduleDto.getOrderIndex());
                module.setCourse(savedCourse);
                
                com.evaluation.model.Module savedModule = moduleRepository.save(module);
                
                if (moduleDto.getQuestions() != null) {
                    for (var questionDto : moduleDto.getQuestions()) {
                        Question question = new Question();
                        question.setQuestionText(questionDto.getQuestionText());
                        question.setOptionA(questionDto.getOptionA());
                        question.setOptionB(questionDto.getOptionB());
                        question.setOptionC(questionDto.getOptionC());
                        question.setOptionD(questionDto.getOptionD());
                        question.setCorrectAnswer(questionDto.getCorrectAnswer());
                        question.setPoints(questionDto.getPoints());
                        question.setModule(savedModule);
                        
                        questionRepository.save(question);
                    }
                }
            }
        }
        
        return getCourseById(savedCourse.getId());
    }
    
    @Transactional
    public CourseDTO updateCourse(Long id, Course courseDetails) {
        Course course = courseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Curso no encontrado"));
        
        course.setName(courseDetails.getName());
        course.setDescription(courseDetails.getDescription());
        course.setDuration(courseDetails.getDuration());
        course.setActive(courseDetails.getActive());
        
        Course updatedCourse = courseRepository.save(course);
        return courseMapper.toDTO(updatedCourse);
    }
    
    @Transactional
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
