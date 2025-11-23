package com.evaluation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {
    private Long id;
    private String name;
    private String description;
    private Integer duration;
    private Boolean active;
    private BadgeDTO badge;
    private List<ModuleDTO> modules;
    private LocalDateTime createdAt;
}
