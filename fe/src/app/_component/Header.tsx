"use client"

import { useState } from 'react';
import * as styles from './Header.css'
import AccordionMenu from './AccordionMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Paypick</div>
      <button className={styles.menu} onClick={() => setIsOpen(!isOpen)}>=</button>
      <AccordionMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Header
