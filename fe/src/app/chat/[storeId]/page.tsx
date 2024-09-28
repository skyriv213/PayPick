"use client"

import { useEffect, useState, useRef } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { checkChatRoom, createChatRoom, enterChatRoom } from '@/hooks/chatApi';
import { connectToChat, disconnectFromChat, sendMessage } from '@/hooks/stomp';
import { IMessage } from '@stomp/stompjs';
import * as styles from './page.css'
import Image from 'next/image';


const ChatRoom: React.FC = () => {
  const router = useRouter()
  const params = useParams();
  const searchParams = useSearchParams();

  const storeId = params.storeId;
  const name = searchParams.get('name');

  const chatBoxRef = useRef<HTMLDivElement>(null);  // 채팅 박스 Ref 설정

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

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '' && isString(storeId)) {
      const time = new Date().toISOString();
      sendMessage(storeId, messageInput, time); // 메시지 전송
      setMessageInput(''); // 입력 필드 초기화
    }
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString); // ISO 문자열을 Date 객체로 변환
    
    const options: Intl.DateTimeFormatOptions = {
      year: '2-digit', 
      month: '2-digit', 
      day: '2-digit', 
      hour: 'numeric',  
      minute: 'numeric', 
      hour12: true, // 오전/오후 형식
    };
  
    // 사용자의 현지 시간대에 맞게 변환하여 표시
    return date.toLocaleString('ko-KR', options);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div className={styles.chatBorder}>
        <div className={styles.chatBox} ref={chatBoxRef}>
          {Array.isArray(messages) && messages.map((msg, index) => (
            <div key={index} className={styles.messageContainer}>
            <div className={styles.messageBox}>
              <span>{msg.text}</span>
            </div>
            <span className={styles.time}>{formatDate(msg.time)}</span>
          </div>
          ))}
        </div>
        <div className={styles.inputBox}> 
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder= "메세지를 입력해주세요"
            className={styles.inputField}
            onKeyUp={handleKeyDown}
          />
          <button onClick={handleSendMessage} className={styles.button}>
            <Image src="/send.svg" alt="send icon" width={30} height={30}></Image>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ChatRoom;