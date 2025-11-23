package com.evaluation.controller;

import com.evaluation.dto.LeaderboardDTO;
import com.evaluation.service.LeaderboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leaderboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class LeaderboardController {
    
    private final LeaderboardService leaderboardService;
    
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<LeaderboardDTO>> getLeaderboardByCourse(
            @PathVariable Long courseId) {
        return ResponseEntity.ok(leaderboardService.getLeaderboardByCourse(courseId));
    }
}
