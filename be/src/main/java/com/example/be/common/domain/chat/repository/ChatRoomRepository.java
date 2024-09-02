package com.example.be.common.domain.chat.repository;
import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.entity.ChatRoom;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long>, ChatRoomRepositoryQuery {


  List<ChatDto> findByStoreId(Long storeId);
  ChatRoom findChatRoomByStoreId(Long storeId);

  boolean existsChatRoomByStoreId(Long storeId);
}
