import Link from 'next/link'
import * as styles from './FooterMenu.css'

const FooterMenu = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.menu}>
        <Link href='/'>최근 본 상점</Link>
      </li>
      <li className={styles.menu}>
        <Link href='/'>홈</Link>
      </li>
      <li className={styles.menu}>
       <Link href='/report'>문의</Link>
      </li>
    </ul>
  )
}

export default FooterMenu
