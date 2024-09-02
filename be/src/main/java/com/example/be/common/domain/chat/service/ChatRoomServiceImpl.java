package com.example.be.common.domain.chat.service;

import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.dtos.CheckDto;
import com.example.be.common.domain.chat.entity.Chat;
import com.example.be.common.domain.chat.entity.ChatRoom;
import com.example.be.common.domain.chat.repository.ChatRepository;
import com.example.be.common.domain.chat.repository.ChatRoomRepository;
import com.example.be.common.domain.store.entity.Store;
import com.example.be.common.domain.store.service.StoreService;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomServiceImpl implements ChatRoomService {

  private final ChatRoomRepository chatRoomRepository;
  private final ChatRepository chatRepository;
  private final StoreService storeService;


  @Override
  public void createChatRoom(Long storeId) {
    Store store = storeService.findById(storeId);
    ChatRoom chatRoom = ChatRoom.builder()
        .store(store)
        .build();
    chatRoomRepository.save(chatRoom);
  }

  @Override
  public List<ChatDto> getChatRoom(Long storeId) {
    ChatRoom chatRoomByStoreId = chatRoomRepository.findChatRoomByStoreId(storeId);
    List<Chat> chats = chatRoomByStoreId.getChats();
    return chats.stream().map(ChatDto::new).collect(Collectors.toList());
  }

  @Override
  public CheckDto checkRoomCondition(Long storeId) {
    if (!chatRoomRepository.existsChatRoomByStoreId(storeId)) {
      return CheckDto.builder().checkRoom(false).build();
    }
    return CheckDto.builder().checkRoom(true).build();
  }
}

