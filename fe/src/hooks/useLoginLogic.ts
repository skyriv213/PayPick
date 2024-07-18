import { useState } from 'react';
import { useRouter } from 'next/router'
import { postApi } from './api';
import useAuthStore from '@/store/login';

interface props {
  password: string
  url: string
}

export const checkPassword = (str: string) => {
  const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9^\W_]{8,20}$/;
  const result = regexp.test(str);

  if (!result) {
    alert('비밀번호를 영문자 또는 숫자 8~20자로 입력해주세요.');
  }
  return result;
};


function useLoginLogic({password, url}: props) {
  const router = useRouter();
  const [inputs, setInputs] = useState(password);

  // const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  // const setTokens = useAuthStore((state) => state.setTokens);
  
  const onClick = async (e : React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    e.preventDefault();
    
    if (password === '') {
      alert('입력하세요');
      return;
    }
    
    const resultPassword = checkPassword(password);
    if (!resultPassword) return;
    
    const res = await postApi(url, password);
    const accessToken = res.headers.get('Authorization');
    const refreshToken = res.headers.get('Refresh');
    if (!res) {
      // 에러 처리 로직
      console.log('login failed');
      return;
    }
    if (res.ok) {
      // setTokens({
      //   accessToken,
      //   refreshToken
      // });
      // setIsLoggedIn(true);
      router.push('/admin')
    }
  };
  
  return [onClick];
}

export default useLoginLogic;

// const onChange = (e) => {
//   const { name, value } = e.target;
//   setInputs({ ...inputs, [name]: value });
// };