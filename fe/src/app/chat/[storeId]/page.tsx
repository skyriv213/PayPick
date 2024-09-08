"use client"

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { checkChatRoom, createChatRoom, enterChatRoom } from '@/hooks/chatApi';
import { connectToChat, disconnectFromChat, sendMessage } from '@/hooks/stomp';
import { IMessage } from '@stomp/stompjs';
import * as styles from './page.css'


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
    if (!isString(storeId)) {
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
        
        setMessages((prevMessages) => {
          if (!Array.isArray(prevMessages)) {
            console.error('prevMessages is not an array:', prevMessages); // 디버깅 로그 추가
            return [chatMessage]; // 기존 메세지 데이터가 없어서 배열이 아닌 undefined 경우 새 배열로 시작
          }
          return [...prevMessages, chatMessage]; // 배열일 경우 기존 메시지에 새 메시지 추가
        });
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
    <div className={styles.container}>
      <h1>Chat Room for Store: {storeId}</h1>
      <div id="messageArea" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {Array.isArray(messages) && messages.map((msg, index) => (
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
        style={{ width: '80%', padding: '100px' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default ChatRoom;