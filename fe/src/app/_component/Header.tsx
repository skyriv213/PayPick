"use client"

import { useState } from 'react';
import * as styles from './Header.css'
import AccordionMenu from './AccordionMenu';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>Paypick</Link>
      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>=</div>
      <AccordionMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Header
