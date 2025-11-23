package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnswerSubmissionDTO {
    private Long enrollmentId;
    private Long moduleId;
    private Map<Long, String> answers; // questionId -> answer (A, B, C, D)
}
