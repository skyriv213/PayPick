package com.example.be.common.domain.chat.service;
import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.entity.Chat;
import com.example.be.common.domain.chat.entity.ChatRoom;
import com.example.be.common.domain.chat.repository.ChatRepository;
import com.example.be.common.domain.chat.repository.ChatRoomRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ChatServiceImpl implements ChatService {

    private final ChatRepository chatRepository;
    private final ChatRoomRepository chatRoomRepository;


    @Override
    public ChatDto sendMessage(Long storeId, ChatDto chatMessage) {
        Optional<ChatRoom> chatRoom = chatRoomRepository.findByStoreId(storeId);
//            .orElseThrow(() -> new IllegalArgumentException("해당 채팅방은 존재하지않습니다"));

        Chat chat = Chat.createChat(chatMessage, chatRoom.orElse(null));
        chatRepository.save(chat);
        return chatMessage;
    }
}
