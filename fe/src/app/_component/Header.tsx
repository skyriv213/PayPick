"use client"

import { useState } from 'react';
import * as styles from './Header.css'
// import AccordionMenu from './AccordionMenu';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        <span className={styles.logoText}>Paypick</span>
      </Link>
      {/* <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
        <span>=</span>
        <AccordionMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>  */}
    </div>
  )
}

export default Header;