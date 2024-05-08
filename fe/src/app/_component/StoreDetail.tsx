
import { useEffect, useState } from 'react';
import * as styles from './StoreDetail.css'
import { useQuery } from '@tanstack/react-query';
import Modal from './Modal';
import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useStore';

 const StoreDetail = () => {
  
  const { data: store } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY]});
  const id = store?.id
  console.log(id);
  
  const [open, setOpen] = useState(false)

  const closeButton = () => {
    setOpen(false);
  };

  const { data: stores } = useQuery<Store>({ 
    queryKey: [`/store`],
    queryFn: () => id ? getStore(id) : Promise.resolve(undefined),
  });

  async function getStore(id:number) {
    const res = await fetch(`http://localhost:8080/store/${id}`)
    if(!res.ok)  {
      throw new Error('Failed fetch data');
    }
    setOpen(true)
    return await res.json();
  }
  

  if (stores) {
    const {id, name, middleCategory, address, paywayList} = stores
  
    return (
      <Modal open={open}>
        <div className={styles.displayModal}>
          <div className={styles.payInfo}>
            <div>{name}</div>
            <button className={styles.buttonCss} onClick={closeButton}>X</button>
          </div>
          <div className={styles.info}>
            <div>{middleCategory}</div>
            <div>{address}</div>
          </div>
          <div className={styles.payInfo}>
            <div>{paywayList}애플페이</div>
            <a href={'/report/' + id}>정보 수정 요청</a>
          </div>
        </div>
      </Modal>
    )
  }
}

export default StoreDetail