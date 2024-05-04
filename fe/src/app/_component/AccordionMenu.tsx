import * as styles from './AccordionMenu.css'
import Link from 'next/link'

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccordionMenu = ({ isOpen, setIsOpen }:Props) => {

  return (
    <div className={`${styles.container} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.closeButtonBox}>
        <button className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>X</button>
      </div>
        <ul className={styles.menuContent}>
          <li>
            <a href='/selectpay'>결제 수단 선택</a>
          </li>
          <li>
            <a href='/'>결제 인증</a>
          </li>
          <li>
            <a href='/'>오류 정보 알리기</a>
          </li>
        </ul>
    </div>
  );
};

export default AccordionMenu;

