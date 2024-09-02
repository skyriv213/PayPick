package com.example.be.common.domain.chat.service;


import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.dtos.CheckDto;
import java.util.List;

public interface ChatRoomService {

  void createChatRoom(Long storeId);

  List<ChatDto> getChatRoom(Long storeId);

  CheckDto checkRoomCondition(Long storeId);
}
