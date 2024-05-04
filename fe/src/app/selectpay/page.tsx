"use client"

import { useState } from 'react'
import * as styles from './page.css'
import Image from 'next/image'
import { usePaymentStore } from '@/store/payment'

const SelectPay = () => {
  const [select, setSelect] = useState('')
  const {setPayment} = usePaymentStore()
  
  const onClickPayment = (event: React.MouseEvent<HTMLDivElement>) => {
    // 'data-value' 속성을 통해 값을 읽어옴
    const value = event.currentTarget.dataset.value;
    if(value) {
      setSelect(value);
    }
  };

  // const onSubmitPayment = () => {
  //   setPayment(select)
  // }
  // onSubmit={onSubmitPayment} // a 태그에 들어갈거

  return (
    <div className={styles.container}>
      <div className={styles.info}>지도에 표시될 결제수단을 선택해주세요</div>
      <div className={styles.payWrapper}>
        <div onClick={onClickPayment} data-value='applePay' className={styles.payBox}>
          <div>로고</div>
          <span>애플페이</span>
        </div>
        <button  className={styles.payBox}>
          <div>로고</div>
          <span>네이버페이</span>
        </button>
        <button  className={styles.payBox}>
          <div>로고</div>
          <span>카카오페이</span>
        </button>
        <button  className={styles.payBox}>
          <div>로고</div>
          <span>제로페이</span>
        </button>
        <button  className={styles.payBox}>
          <div>로고</div>
          <span>지역화페</span>
        </button>
      </div>
      <a  className={styles.confirmBox}>
        완료
      </a>
    </div>
  )
}

export default SelectPay
