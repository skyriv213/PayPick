import * as styles from './AccordionMenu.css'
import Link from 'next/link'

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccordionMenu = ({ isOpen, setIsOpen }:Props) => {

  const closeAccordion = () => {
    setIsOpen(false)
  }

  return (
    <div className={`${styles.container} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.closeButtonBox}>
        <div className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>X</div>
      </div>
        <ul className={styles.menuContent}>
          <li>
            <Link href='/' onClick={closeAccordion}>홈</Link>
          </li>
          {/* <li>
            <Link href='/selectpay' onClick={closeAccordion}>결제 수단 선택</Link>
          </li> */}
          <li>
            <Link href='/report' onClick={closeAccordion}>오류 정보 알리기</Link>
          </li>
        </ul>
    </div>
  );
};

export default AccordionMenu;

