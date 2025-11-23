package com.evaluation.mapper;

import com.evaluation.dto.UserDTO;
import com.evaluation.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    
    UserDTO toDTO(User user);
    
    List<UserDTO> toDTOList(List<User> users);
}
