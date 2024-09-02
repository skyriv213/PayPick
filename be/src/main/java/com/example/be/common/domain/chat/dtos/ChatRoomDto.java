package com.example.be.common.domain.chat.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {

    private Long roomId;
    private String chatRoomTitle;

//    public ChatRoomDto(UserChatRoom userChatRoom){
//        this.roomId = userChatRoom.getChatRoom().getId();
//        this.chatRoomTitle = userChatRoom.getChatRoom().getChatRoomTitle();
//    }

}
