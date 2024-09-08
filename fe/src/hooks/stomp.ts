import { Client, IMessage } from '@stomp/stompjs';


let stompClient: Client | null = null;

const socketUrl = 'wss://localhost/ws/chat';

export const connectToChat = (storeId: string, onMessageReceived: (message: IMessage) => void) => {
  if (stompClient && stompClient.active) { // 이미 클라이언트가 활성화된 경우 재연결 방지
    console.log('STOMP client is already connected.');
    return;
  }
  
  stompClient = new Client({
    brokerURL: socketUrl,
    debug: (str: string) => {
      console.log(str);
    },
    reconnectDelay: 50000, // 재연결 시도 간격
    heartbeatIncoming: 40000,
    heartbeatOutgoing: 40000,
  });

  stompClient.onConnect = () => {
    console.log('Connected to WebSocket server');

    // 특정 채팅방 구독
    stompClient?.subscribe(`/topic/rooms/${storeId}`, (message: IMessage) => {
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

export const sendMessage = (storeId: string, text: string, time: string) => {
  if (stompClient && stompClient.connected) {
    const chatMessage = {
      text,
      time,
    };

    stompClient.publish({
      destination: `/app/rooms/${storeId}`,
      body: JSON.stringify(chatMessage),
    });
  }
};

// Application error: a client-side exception has occurred (see the browser console for more information).

// export const sendMessage = (storeId: string, text: string, time: string) => {
//   if (!stompClient || !stompClient.connected) {  // 연결 상태를 확인
//     console.error('Cannot send message: STOMP client is not connected.');
//     return; // 연결되지 않은 경우 함수 종료
//   }

//   const chatMessage = {
//     text,
//     time,
//   };

//   try {
//     stompClient.publish({
//       destination: `/app/rooms/${storeId}`,
//       body: JSON.stringify(chatMessage),
//     });
//     console.log('Message sent:', chatMessage);
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
// };