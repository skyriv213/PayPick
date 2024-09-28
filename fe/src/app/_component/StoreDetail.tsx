import * as styles from './StoreDetail.css'
import { useQuery } from '@tanstack/react-query';
import { useModalStore } from '@/store/modal';
import Modal from './Modal';
import { Store, storeData } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useStore';
import { getApi } from '@/hooks/api';
import Link from 'next/link';
import Image from 'next/image';

 const StoreDetail = () => {

  const { show, storeModal } = useModalStore()

  const { data: marker } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY]});
  const id = marker?.id

  async function getStore(id:number) {
    const url = (`/store/${id}`)
    return getApi(url);
  }

  const { data: storeData } = useQuery<storeData>({ 
    queryKey: [`/store`, id],
    queryFn: () => id ? getStore(id) : Promise.resolve(undefined),
    enabled: !!id, // id가 정의된 경우에만 쿼리 실행
    staleTime: 60 * 1000,
  });

  if (!storeData) {
    return null;
  }
  
  const { name, middleCategory, address, paymentList } = storeData
  
    return (
      <Modal open={show} className={styles.container}>
        <div className={styles.displayModal}>
          <div className={styles.payInfo}>
            <div>{name}</div>
            
            <button className={styles.buttonCss} onClick={() => storeModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
                <line x1="10" y1="10" x2="40" y2="40" stroke="#3D6CE5" fill="#3D6CE5" strokeWidth="5" strokeLinecap="round"/>
                <line x1="40" y1="10" x2="10" y2="40" stroke="#3D6CE5" fill="#3D6CE5" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.payInfo}>
            <div className={styles.info}>{middleCategory}</div>
            <Link href={`/chat/${id}?name=${encodeURIComponent(name)}`}>
              <Image src="/chat.svg" alt="chat icon" width={20} height={20}></Image>
            </Link>
          </div>
          <div>
            <div className={styles.info}>{address}</div>
          </div>
          <div className={styles.payInfo}>
            <span>애플페이</span>
          {/* {paymentList.map((payment) => (
            <div key={payment.id}>
              {payment.payType}
            </div>
          ))} */}
            <a href={`/report/${id}?name=${encodeURIComponent(name)}`}>정보 수정 요청</a>
          </div>
        </div>
      </Modal>
    )
  }

export default StoreDetail;