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

// 채팅방 입장
export const enterChatRoom = async (storeId: string): Promise<{ roomId: number; chatDtoList: { text: string; time: string }[] }> => {
  const response = await fetch(`${baseURL}/room/${storeId}`, {
    ...defaultOptions,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to enter chat room');
  }

  return response.json();
};
