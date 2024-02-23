import * as styles from './page.css'
import RQProvider from './_component/RQProvider';
import MapSection from './_component/MapSection';

export default function Home() {

  return (
    <RQProvider>
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>Paypick</div>
          <div className={styles.menu}>=</div>
        </div>
        <MapSection />
      </main>
    </RQProvider>
  );
}
