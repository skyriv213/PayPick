"use client"

import { useState } from 'react';
import * as styles from './Header.css'
import AccordionMenu from './AccordionMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 아코디언 메뉴의 열림/닫힘 상태를 관리하는 상태

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Paypick</div>
      <button className={styles.menu} onClick={() => setIsOpen(!isOpen)}>=</button>
      {/* isOpen 상태를 AccordionMenu에 전달하여 열림/닫힘 상태를 제어 */}
      {isOpen && <AccordionMenu />}
    </div>
  )
}

export default Header
