package com.example.be.common.domain.chat.entity;

import com.example.be.common.domain.chat.dtos.ChatDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

//@EntityListeners(AuditingEntityListener.class)
@Entity
@Table(name = "chats")
public class Chat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "chat_id")
  Long id;

  private String text;

  private LocalDateTime localDateTime;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "chat_room_id")
  private ChatRoom chatRoom;


  public static Chat createChat(ChatDto chatMessage, ChatRoom chatRoom) {
    return Chat.builder().chatRoom(chatRoom)
//        .sender(chatMessage.getFrom())
        .text(chatMessage.getText())
        .localDateTime(chatMessage.getTime())
        .build();
  }


}
