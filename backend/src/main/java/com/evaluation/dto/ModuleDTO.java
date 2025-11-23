package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ModuleDTO {
    private Long id;
    private String name;
    private String content;
    private Integer orderIndex;
    private List<QuestionDTO> questions;
}
