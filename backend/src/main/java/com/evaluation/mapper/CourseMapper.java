package com.evaluation.mapper;

import com.evaluation.dto.CourseDTO;
import com.evaluation.model.Course;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {BadgeMapper.class, ModuleMapper.class})
public interface CourseMapper {
    CourseDTO toDTO(Course course);
    List<CourseDTO> toDTOList(List<Course> courses);
}
