import * as styles from './StoreDetail.css'
import { useQuery } from '@tanstack/react-query';
import { useModalStore } from '@/store/modal';
import Modal from './Modal';
import { Store, storeData } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useStore';
import { getApi } from '@/hooks/api';

 const StoreDetail = () => {

  const { show, storeModal } = useModalStore()

  const { data: marker } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY]});
  const id = marker?.id

  async function getStore(id:string) {
    const url = (`http://localhost:8080/store/${id}`)
    return getApi(url);
  }

  const { data: storeData } = useQuery<storeData>({ 
    queryKey: [`/store`, id],
    queryFn: () => id ? getStore(id) : Promise.resolve(undefined),
    enabled: !!id, // id가 정의된 경우에만 쿼리 실행
    staleTime: 60 * 1000, // 1분
  });

  if (!storeData) {
    return null;
  }
  
  const { name, middleCategory, address, paywayList } = storeData
  
    return (
      <Modal open={show} className={styles.container}>
        <div className={styles.displayModal}>
          <div className={styles.payInfo}>
            <div>{name}</div>
            <button className={styles.buttonCss} onClick={() => storeModal(false)}>X</button>
          </div>
          <div className={styles.info}>
            <div>{middleCategory}</div>
            <div>{address}</div>
          </div>
          <div className={styles.payInfo}>
            <div>{paywayList}애플페이</div>
            <a href={`/report/${id}?name=${encodeURIComponent(name)}`}>정보 수정 요청</a>
          </div>
        </div>
      </Modal>
    )
  }

export default StoreDetail