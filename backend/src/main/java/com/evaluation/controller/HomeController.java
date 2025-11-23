package com.evaluation.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {
    
    @GetMapping
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Bienvenido al Sistema de Evaluación API");
        response.put("version", "1.0.0");
        response.put("status", "running");
        
        Map<String, String> endpoints = new HashMap<>();
        endpoints.put("users", "/users");
        endpoints.put("courses", "/courses");
        endpoints.put("enrollments", "/enrollments");
        endpoints.put("evaluations", "/evaluations");
        endpoints.put("leaderboard", "/leaderboard");
        
        response.put("endpoints", endpoints);
        
        return response;
    }
    
    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Sistema funcionando correctamente");
        return response;
    }
}
