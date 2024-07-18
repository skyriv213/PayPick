import {create} from "zustand";
import { devtools } from 'zustand/middleware'; // Zustand 스토어를 Redux DevTools와 연동하여 상태 변화를 시각적으로 추적할 수 있도록 설정합니다. 
  // console.trace()의 활용 console.trace()` 메소드는 현재 실행 중인 코드의 호출 스택을 콘솔에 출력하는 데 사용됩니다.

interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  tokens: Tokens;
  setIsLoggedIn: (status: boolean) => void;
  setTokens: (tokens: Tokens) => void;
}


const useAuthStore = create(
  devtools(
  (set) : AuthState => ({
  isLoggedIn: false,
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
  setTokens: (tokens) => set({ tokens }),
})));

export default useAuthStore;


// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// interface Tokens {
//   accessToken: string | null;
//   refreshToken: string | null;
// }

// interface AuthState {
//   isLoggedIn: boolean;
//   tokens: Tokens;
//   setIsLoggedIn: (status: boolean) => void;
//   setTokens: (tokens: Tokens) => void;
// }

// const useAuthStore = create(
//   devtools(
//     (set) : AuthState => ({
//     isLoggedIn: false,
//     tokens: {
//       accessToken: null,
//       refreshToken: null,
//     },
//     setIsLoggedIn: (status) => set({ isLoggedIn: status }),
//     setTokens: (tokens) => set({ tokens }),
//   }))
// );

// export default useAuthStore;