import Link from 'next/link'
import * as styles from './FooterMenu.css'

const FooterMenu = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.menu}>
        <Link href='/'></Link>
        <span>최근 본 상점</span>
      </li>
      <li className={styles.borderMenu}>
        <Link href='/'></Link>
        <span>홈</span>
      </li>
      <li className={styles.menu}>
       <Link href='/report'></Link>
       <span>문의</span>
      </li>
    </ul>
  )
}

export default FooterMenu;