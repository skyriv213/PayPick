"use client"

import { useEffect, useState } from 'react';
import * as styles from './page.css';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { postApi } from '@/hooks/api';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  
  const id = params.id;

  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "",
    errorType: "impossible",
    errorContent: ""
  });
  
  useEffect(() => {
    const name = searchParams.get('name');
      if (typeof name === 'string') {
        setFormData(prevState => ({
          ...prevState,
          storeName: name
        }));
        console.log(name);
      }
    }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'errorType' && value === 'other') {
      setShowInput(true);
    } else if (name === 'errorType') {
      setShowInput(false);
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const sendingData = {
    storeName: formData.storeName,
    errorType: formData.errorType,
    errorContent: showInput ? formData.errorContent : ''
  };

  if(formData.storeName === ''){
    alert('매장명을 입력해주세요!')
    return
  }
  try {
    const response = await postApi(`/report/${id}`, sendingData);
    console.log(response);
    
    if (response.statusCode === 200 ) {
      router.push('/');
      console.log('전송 성공');
      alert('공유해주셔서 감사합니다! 문제를 확인하고 조치하도록 하겠습니다.');
    } 
  } catch (error) {
    console.error('전송 실패:', error);
    alert('서버에 문제가 생겨 공유가 되지 않았습니다. 다시 시도해 주세요.');
  }
};


  return (
    <div className={styles.container}>
      <div className={styles.info}>문제가 있는 부분을 저희에게 공유해주세요 : </div>
      <ul className={styles.payWrapper}>
        <label>매장명</label>
        <li>
          <input 
            className={styles.inputBox}
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange} 
            readOnly
          />
        </li>
        <label>오류 내용</label>
        <li>
          <select 
            className={styles.inputBox}
            name="errorType"
            value={formData.errorType}
            onChange={handleChange}
          >
            <option value="impossible">애플페이 결제가 불가능한 곳이에요</option>
            <option value="possible">애플페이 결제가 가능한 곳이에요</option>
            <option value="different">매장 이름이 실제와 달라요</option>
            <option value="notThere">없는 매장이에요</option>
            <option value="other">기타</option>
          </select>
        </li>
          {showInput && (
              <div className={styles.otherBox}>
                <label>기타 오류 내용</label>
                <input 
                  className={styles.inputBox}
                  type="text"
                  name="errorContent"
                  placeholder='오류 내용을 작성해주세요'
                  value={formData.errorContent}
                  onChange={handleChange} 
                />
              </div>
            )}
      </ul>
      <button type='submit' className={styles.confirmBox} value='완료' onClick={handleSubmit}>
        완료
      </button>
    </div>
  )
}

export default Page;