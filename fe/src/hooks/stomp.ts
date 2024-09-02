import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let stompClient: Client | null = null;

export const connectToChat = (roomId: string, onMessageReceived: (message: IMessage) => void) => {
  const socketUrl = 'wss://localhost/chat'; // 백엔드 WebSocket 엔드포인트

  stompClient = new Client({
    webSocketFactory: () => new SockJS(socketUrl),
    debug: (str: string) => {
      console.log(str);
    },
    reconnectDelay: 5000, // 재연결 시도 간격
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  stompClient.onConnect = () => {
    console.log('Connected to WebSocket server');

    // 특정 채팅방 구독
    stompClient?.subscribe(`/topic/rooms/${roomId}`, (message: IMessage) => {
      onMessageReceived(message);
    });
  };

  stompClient.onStompError = (frame) => {
    console.error('STOMP Error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
  };

  stompClient.activate(); // STOMP 클라이언트 활성화
};

export const disconnectFromChat = () => {
  if (stompClient) {
    stompClient.deactivate();
    console.log('Disconnected from WebSocket server');
  }
};

export const sendMessage = (roomId: string, text: string, time: string) => {
  if (stompClient && stompClient.connected) {
    const chatMessage = {
      text,
      time,
    };

    stompClient.publish({
      destination: `/app/rooms/${roomId}`,
      body: JSON.stringify(chatMessage),
    });
  }
};