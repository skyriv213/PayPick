

import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { Coordinates, SvgIcon } from "@/types/map";
import { useState } from 'react';
import * as styles from './StoreDetail.css'


  // const [storeData, setStoreData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:8080/store/3');
  //       const data = await res.json();
  //       setStoreData(data);
  //       console.log(data);
        
  //     } catch (error) {
  //       console.error(error);
        
  //     }
  //   };

  //   fetchData();
  // }, []);

  

   // const data = {
  //   "id": 3,
  //   "storeName": "생곡메밀막국수",
  //   "majorCategory": "음식",
  //   "middleCategory": "국수/칼국수",
  //   "storeAddress": "경기도 화성시 동탄지성로 222",
  //   "paywayList": []
  // }

 
  import Modal from './Modal';


 function StoreDetail() {

   async function getStore() {
    const res = await fetch(`http://localhost:8080/store/3`)
    if(!res.ok) {
      throw new Error('Failed fetch data');
    }
    return await res.json();
  }

  type Store = {
    id: number;
    storeName: string;
    majorCategory: string;
    middleCategory: string;
    storeAddress: string;
    paywayList: string | string[]
  };

  const { data, error, isLoading } = useQuery<Store>({ queryKey: ["get-store"], queryFn: getStore });
  // const { data } = await queryClient.fetchQuery({queryKey: ["get-store"], queryFn: getStore });
  
  const [open, setOpen] = useState(true)

  const onClickButton = () => {
    setOpen(false);
  };

 

  
  if (data) {
    const {id, storeName, majorCategory, middleCategory, storeAddress, paywayList} = data
  
    return (
      <Modal open={open}>
        <div className={styles.displayModal}>
          <div className={styles.payInfo}>
            <div>{storeName}</div>
            <button className={styles.buttonCss} onClick={onClickButton}>X</button>
          </div>
          <div>
            <div>{middleCategory}</div>
            <div>{storeAddress}</div>
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

