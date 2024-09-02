package com.example.be.common.domain.chat.repository;
import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.dtos.ChatRoomDto;
import java.util.List;

public interface ChatRoomRepositoryQuery {

  List<ChatDto> getChatRoom(Long storeId);

//    List<ChatRoomDto> findAllByUserQuery(User user);
}
