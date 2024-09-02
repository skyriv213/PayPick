"use client"

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { checkChatRoom, createChatRoom, enterChatRoom } from '@/hooks/chatApi';
import { connectToChat, disconnectFromChat, sendMessage } from '@/hooks/stomp';
import { IMessage } from '@stomp/stompjs';

const ChatRoom: React.FC = () => {
  const router = useRouter()
  const params = useParams();
  const storeId = params.storeId;

  const isString = (value: string | string[] | undefined): value is string => {
    return typeof value === 'string';
  };

  const [messages, setMessages] = useState<{ text: string; time: string }[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');

  useEffect(() => {
    if (!isString(storeId)) {      // 테스트를 위해 일단 주석처리
      router.push('/')
      return;
    }
      
    // 채팅방 생성 확인
    checkChatRoom(storeId).then(async (response) => {
      if (!response.checkRoom) {
        // 채팅방이 없으면 생성
        await createChatRoom(storeId);
      }
      
      // 채팅방 입장
      const chatData = await enterChatRoom(storeId);
      setMessages(chatData.chatDtoList); // 기존 메시지 설정

      // WebSocket 연결 설정
      const onMessageReceived = (message: IMessage) => {
        const chatMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, chatMessage]);
      };

      connectToChat(storeId, onMessageReceived); // STOMP 연결 설정
    });

    return () => {
      disconnectFromChat(); // 컴포넌트 언마운트 시 연결 해제
    };
  }, [storeId, router]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '' && isString(storeId)) {
      const time = new Date().toISOString();
      sendMessage(storeId, messageInput, time); // 메시지 전송
      setMessageInput(''); // 입력 필드 초기화
    }
  };

  return (
    <div>
      <h1>Chat Room for Store: {storeId}</h1>
      <div id="messageArea" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.time}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Enter your message"
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default ChatRoom;