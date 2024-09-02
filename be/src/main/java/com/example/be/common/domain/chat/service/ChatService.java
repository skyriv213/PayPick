package com.example.be.common.domain.chat.service;


import com.example.be.common.domain.chat.dtos.ChatDto;

public interface ChatService {

    ChatDto sendMessage(Long roomId, ChatDto chatMessage);
}
