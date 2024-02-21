import * as styles from './page.css'
import Map from './_component/map';

export default function Home() {

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>Paypick</div>
        <div className={styles.menu}>=</div>
      </div>
      <Map/>
    </main>
  );
}
