// export const dynamic = 'force-static';
// export const revalidate = 5;

import styles from './page.module.css';

import Main from './components/Main';

export default function Home() {
    return (
        <div className={styles.page}>
            <Main />
        </div>
    );
}
