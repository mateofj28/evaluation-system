package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCourseDTO {
    private String name;
    private String description;
    private Integer duration;
    private Long badgeId;
    private List<CreateModuleDTO> modules;
}
