import styles from './page.module.css';

import {TaskApp} from './pages';

export default function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <TaskApp />
      </main>
    </div>
  );
}
