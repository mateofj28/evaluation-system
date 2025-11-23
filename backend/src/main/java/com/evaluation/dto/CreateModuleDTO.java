package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateModuleDTO {
    private String name;
    private String content;
    private Integer orderIndex;
    private List<CreateQuestionDTO> questions;
}
