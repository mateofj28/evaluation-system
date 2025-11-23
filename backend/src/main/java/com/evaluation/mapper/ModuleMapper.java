package com.evaluation.mapper;

import com.evaluation.dto.ModuleDTO;
import com.evaluation.model.Module;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {QuestionMapper.class})
public interface ModuleMapper {
    ModuleDTO toDTO(Module module);
    List<ModuleDTO> toDTOList(List<Module> modules);
}
