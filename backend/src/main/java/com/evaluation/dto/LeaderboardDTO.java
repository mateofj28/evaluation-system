package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaderboardDTO {
    private Long userId;
    private String username;
    private String firstName;
    private String lastName;
    private Long courseId;
    private String courseName;
    private Integer score;
    private Integer maxScore;
    private Double percentage;
    private Integer rank;
}
