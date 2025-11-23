package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationResultDTO {
    private Integer correctAnswers;
    private Integer totalQuestions;
    private Integer pointsEarned;
    private Integer maxPoints;
    private Double percentage;
    private Boolean passed;
    private BadgeDTO badgeEarned;
}
