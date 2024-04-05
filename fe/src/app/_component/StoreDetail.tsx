
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import * as styles from './StoreDetail.css'
import Modal from './Modal';
import { Store } from '@/types/store';


 function StoreDetail() {
  
  const [open, setOpen] = useState(true)

  const closeButton = () => {
    setOpen(false);
  };

  async function getStore() {
    const res = await fetch(`http://localhost:8080/store/4`)
    if(!res.ok) {
      throw new Error('Failed fetch data');
    }
    return await res.json();
  }

  const { data } = useQuery<Store>({ queryKey: ["get-store"], queryFn: getStore });

  if (data) {
    const {id, name, middleCategory, address, paywayList} = data
  
    return (
      <Modal open={open}>
        <div className={styles.displayModal}>
          <div className={styles.payInfo}>
            <div>{name}</div>
            <button className={styles.buttonCss} onClick={closeButton}>X</button>
          </div>
          <div>
            <div>{middleCategory}</div>
            <div>{address}</div>
          </div>
          <div className={styles.payInfo}>
            <div>{paywayList}애플페이</div>
            <div>정보 수정 요청</div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default StoreDetail

