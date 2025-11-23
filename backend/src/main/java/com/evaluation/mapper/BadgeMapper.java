package com.evaluation.mapper;

import com.evaluation.dto.BadgeDTO;
import com.evaluation.model.Badge;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BadgeMapper {
    
    BadgeDTO toDTO(Badge badge);
    
    List<BadgeDTO> toDTOList(List<Badge> badges);
}
