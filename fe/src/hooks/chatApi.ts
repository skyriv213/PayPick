import {baseURL} from '@/hooks/api'

// 공통 fetch 옵션 설정
const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// 채팅방 생성 확인
export const checkChatRoom = async (storeId: string): Promise<{ checkRoom: boolean }> => {
  const response = await fetch(`${baseURL}/room/check/${storeId}`, {
    ...defaultOptions,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to check chat room existence');
  }

  return response.json();
};

// 채팅방 생성
export const createChatRoom = async (storeId: string): Promise<void> => {
  const response = await fetch(`${baseURL}/room/${storeId}`, {
    ...defaultOptions,
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to create chat room');
  }
};

// 채팅방 입장, 채팅 이력 가져오기
export const enterChatRoom = async (storeId: string): Promise<{ roomId: number; chatDtoList: { text: string; time: string }[] }> => {
  const response = await fetch(`${baseURL}/room/${storeId}`, {
    ...defaultOptions,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to enter chat room');
  }
  
  const data = await response.json();

  return {
    roomId: data.roomId,
    chatDtoList: Array.isArray(data.chatDtoList) ? data.chatDtoList : [], // chatDtoList가 항상 배열이 되도록 보장
  };
};
