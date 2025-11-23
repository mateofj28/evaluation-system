package com.evaluation.mapper;

import com.evaluation.dto.QuestionDTO;
import com.evaluation.model.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    
    QuestionDTO toDTO(Question question);
    
    List<QuestionDTO> toDTOList(List<Question> questions);
}
