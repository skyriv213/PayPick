package com.example.be.common.domain.chat.controller;
import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;


    @CrossOrigin
    @MessageMapping("/rooms/{storeId}")
    @SendTo("/topic/rooms/{storeId}")
    public ChatDto sendMessage(@DestinationVariable Long storeId, @Payload ChatDto chatMessage) {

        return chatService.sendMessage(storeId, chatMessage);
    }
}
