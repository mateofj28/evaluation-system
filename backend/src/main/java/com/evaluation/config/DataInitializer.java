package com.evaluation.config;

import com.evaluation.model.*;
import com.evaluation.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final BadgeRepository badgeRepository;
    private final ModuleRepository moduleRepository;
    private final QuestionRepository questionRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) {
        // Crear usuarios
        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setEmail("admin@evaluation.com");
        admin.setFirstName("Carlos");
        admin.setLastName("Administrador");
        admin.setRole(UserRole.ADMINISTRADOR);
        userRepository.save(admin);
        
        User evaluador1 = new User();
        evaluador1.setUsername("evaluador");
        evaluador1.setPassword(passwordEncoder.encode("eval123"));
        evaluador1.setEmail("evaluador@evaluation.com");
        evaluador1.setFirstName("Juan");
        evaluador1.setLastName("Pérez");
        evaluador1.setRole(UserRole.EVALUADOR);
        userRepository.save(evaluador1);
        
        User evaluador2 = new User();
        evaluador2.setUsername("profesor");
        evaluador2.setPassword(passwordEncoder.encode("prof123"));
        evaluador2.setEmail("profesor@evaluation.com");
        evaluador2.setFirstName("Ana");
        evaluador2.setLastName("García");
        evaluador2.setRole(UserRole.EVALUADOR);
        userRepository.save(evaluador2);
        
        User evaluado1 = new User();
        evaluado1.setUsername("estudiante");
        evaluado1.setPassword(passwordEncoder.encode("est123"));
        evaluado1.setEmail("estudiante@evaluation.com");
        evaluado1.setFirstName("María");
        evaluado1.setLastName("López");
        evaluado1.setRole(UserRole.EVALUADO);
        userRepository.save(evaluado1);
        
        User evaluado2 = new User();
        evaluado2.setUsername("alumno");
        evaluado2.setPassword(passwordEncoder.encode("alum123"));
        evaluado2.setEmail("alumno@evaluation.com");
        evaluado2.setFirstName("Pedro");
        evaluado2.setLastName("Martínez");
        evaluado2.setRole(UserRole.EVALUADO);
        userRepository.save(evaluado2);
        
        User evaluado3 = new User();
        evaluado3.setUsername("estudiante2");
        evaluado3.setPassword(passwordEncoder.encode("est456"));
        evaluado3.setEmail("estudiante2@evaluation.com");
        evaluado3.setFirstName("Laura");
        evaluado3.setLastName("Rodríguez");
        evaluado3.setRole(UserRole.EVALUADO);
        userRepository.save(evaluado3);
        
        // Crear badge
        Badge badge = new Badge();
        badge.setName("Java Master");
        badge.setDescription("Completó el curso de Java con excelencia");
        badge.setImageUrl("/badges/java-master.png");
        badge.setRequiredScore(80);
        badgeRepository.save(badge);
        
        // Crear curso
        Course course = new Course();
        course.setName("Introducción a Java");
        course.setDescription("Curso básico de programación en Java");
        course.setDuration(120);
        course.setBadge(badge);
        courseRepository.save(course);
        
        // Crear módulo
        com.evaluation.model.Module module = new com.evaluation.model.Module();
        module.setName("Fundamentos de Java");
        module.setContent("Aprende los conceptos básicos de Java");
        module.setOrderIndex(1);
        module.setCourse(course);
        moduleRepository.save(module);
        
        // Crear preguntas
        Question q1 = new Question();
        q1.setQuestionText("¿Qué es Java?");
        q1.setOptionA("Un lenguaje de programación");
        q1.setOptionB("Una bebida");
        q1.setOptionC("Un sistema operativo");
        q1.setOptionD("Un navegador");
        q1.setCorrectAnswer("A");
        q1.setPoints(10);
        q1.setModule(module);
        questionRepository.save(q1);
        
        Question q2 = new Question();
        q2.setQuestionText("¿Java es orientado a objetos?");
        q2.setOptionA("Sí");
        q2.setOptionB("No");
        q2.setOptionC("A veces");
        q2.setOptionD("Depende");
        q2.setCorrectAnswer("A");
        q2.setPoints(10);
        q2.setModule(module);
        questionRepository.save(q2);
    }
}
