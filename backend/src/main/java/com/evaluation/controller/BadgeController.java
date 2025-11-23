package com.evaluation.controller;

import com.evaluation.dto.BadgeDTO;
import com.evaluation.mapper.BadgeMapper;
import com.evaluation.model.Badge;
import com.evaluation.repository.BadgeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/badges")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class BadgeController {
    
    private final BadgeRepository badgeRepository;
    private final BadgeMapper badgeMapper;
    
    @GetMapping
    public ResponseEntity<List<BadgeDTO>> getAllBadges() {
        return ResponseEntity.ok(badgeMapper.toDTOList(badgeRepository.findAll()));
    }
    
    @PostMapping
    public ResponseEntity<BadgeDTO> createBadge(@RequestBody Badge badge) {
        Badge saved = badgeRepository.save(badge);
        return ResponseEntity.ok(badgeMapper.toDTO(saved));
    }
}
