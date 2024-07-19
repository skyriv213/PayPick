"use client"

import { useState } from 'react';
import * as styles from './page.css'
import { postApi } from '@/hooks/api';
import { useRouter } from 'next/navigation'

const Report = () => {
  const router = useRouter()

  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState({
    storeName: '',
    errorMsg: '',
    otherError: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'errorMsg' && value === 'other') {
      setShowInput(true);
    } else if (name === 'errorMsg') {
      setShowInput(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sendingData = {
      storeName: formData.storeName,
      error: formData.errorMsg,
      otherError: showInput ? formData.otherError : ''
    };

    if(formData.storeName === ''){
      alert('매장명을 입력해주세요!')
      return
    }

    try {
      const response = await postApi(`/report`, sendingData);

      if (response.ok) {
        router.push('/')
        console.log('전송 성공');
        alert('공유해주셔서 감사합니다! 문제를 확인하고 조치하도록 하겠습니다.')
      } else {
        console.error('전송 실패');
        alert('서버에 문제가 생겨 공유가 되지 않았습니다. 다시 시도해 주세요.')
      }
    } catch (error) {
      console.error(error);
      // 추가적인 오류 처리 로직
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>문제가 있는 부분을 저희에게 공유해주세요 : )</div>
      <ul className={styles.payWrapper}>
        <li>
          <label>매장명</label>
          <input 
            className={styles.inputBox}
            type="text"
            name="storeName"
            placeholder='정확한 매장명을 입력해주세요!'
            value={formData.storeName}
            onChange={handleChange}
          />
        </li>
        <li>
          <label>오류 내용</label>
          <select 
            className={styles.inputBox}
            name="errorMsg"
            value={formData.errorMsg}
            onChange={handleChange}
          >
              <option value="impossible">애플페이 결제가 불가능한 곳이에요</option>
              <option value="possible">애플페이 결제가 가능한 곳이에요</option>
              <option value="different">매장 이름이 실제와 달라요</option>
              <option value="noThere">없는 매장이에요</option>
              <option value="other">기타</option>
          </select>
          {showInput && (
            <div className={styles.otherBox}>
              <label>기타 오류 내용</label>
              <input 
                className={styles.inputBox}
                type="text"
                name="otherError"
                placeholder='오류 내용을 작성해주세요'
                value={formData.otherError}
                onChange={handleChange}
              />
            </div>
          )}
        </li>
      </ul>
      <button type='submit' className={styles.confirmBox} value='완료' onClick={handleSubmit}>완료</button>
    </div>
  )
}

export default Report;
