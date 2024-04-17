import * as styles from './AccordionMenu.css'

const AccordionMenu = () => {

  return (
    <div className={styles.container}>
      <button >메뉴</button>
      <div className="menu-content">
        <ol>
          <li>결제 수단 선택</li>
          <li>결제 인증</li>
          <li>요류 정보 알리기</li>
        </ol>
      </div>
    </div>
  );
};

export default AccordionMenu;
// className={styles.closeButton}