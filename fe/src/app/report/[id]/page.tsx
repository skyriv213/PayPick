"use client"

import { useEffect, useState } from 'react';
import * as styles from './page.css';
import { useSearchParams } from 'next/navigation';

const Page = () => {

  const [showInput, setShowInput] = useState(false);
  const [storeName, setStoreName] = useState('');
  const searchParams = useSearchParams()

  useEffect(() => {
    const name = searchParams.get('name');

      if (typeof name === 'string') {
        setStoreName(name);
        console.log(storeName);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'other') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>문제가 있는 부분을 저희에게 공유해주세요 : </div>
      <ul className={styles.payWrapper}>
        <label>매장명</label>
        <li>
          <input className={styles.inputBox} type="text" value={storeName} readOnly/>
        </li>
        <label>오류 내용</label>
        <li>
          <select className={styles.inputBox} name="error" onChange={handleChange}>
            <option value="possible">애플페이 결제가 가능한 곳이에요</option>
            <option value="impossible">애플페이 결제가 불가능한 곳이에요</option>
            <option value="different">매장 이름이 실제와 달라요</option>
            <option value="noThere">없는 매장이에요</option>
            <option value="other">기타</option>
          </select>
        </li>
          {showInput && (
              <div className={styles.otherBox}>
                <label>기타 오류 내용</label>
                <input className={styles.inputBox} type="text" name="otherMessage" placeholder='오류 내용을 작성해주세요' />
              </div>
            )}
      </ul>
      <input type='submit' className={styles.confirmBox} value='완료'>
        
      </input>
    </div>
  )
}

export default Page
