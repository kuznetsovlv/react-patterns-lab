// export const dynamic = 'force-static';
// export const revalidate = 5;

import {Suspense} from 'react';
import styles from './page.module.css';

import {TaskApp} from './pages';
import Skeleton from './Skeleton';
import HookPage from '@/app/hooks/page';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Task Tracker</h1>
                <Suspense fallback={<Skeleton />}>
                    <TaskApp />
                </Suspense>
                <h1>Hooks Demo</h1>
                <Suspense fallback={<Skeleton />}>
                    <HookPage />
                </Suspense>
            </main>
        </div>
    );
}
