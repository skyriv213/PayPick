import * as styles from './RerenderButton.css'
import Modal from "./Modal"
import { useModalStore } from "@/store/modal"
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { Store } from '@/types/store';

// 이렇게 QueryObserverResult 타입을 지정하고 RefetchOptions도 필요할 경우 지정해줍니다. queryClient refetch 무조건 블로그 소재!!!!!
type RefetchFunction = (options?: RefetchOptions) => Promise<QueryObserverResult<Store[], Error>>;

type Props = {
  refetchMarkers: RefetchFunction;
}

const RerenderButton = ({ refetchMarkers }: Props) => {
  const { rerenderShow, rerenderModal } = useModalStore();

  const onClick = async () => {
    try {
      await refetchMarkers(); // refetchMarkers 함수 실행
      rerenderModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Modal open={rerenderShow} className={styles.secondContainer}>
      <button onClick={onClick} className={styles.displayModal} >
        <span>현 지도에서 검색</span>
      </button>
    </Modal>
  )
}

export default RerenderButton