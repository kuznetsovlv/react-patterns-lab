import styles from './page.module.scss';
import TransitionDemo from './components/TransitionTaskDemo';
import DeferredSearchDemo from './components/DeferredSearchDemo';
import ImperativeHandleDemo from './components/ImperativeHandleDemo';
import ActionStateDemo from './components/ActionStateDemo';

export default function HookPage() {
    return (
        <>
            <section className={styles.section}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Transition</h2>
                </header>
                <main className={styles.main}>
                    <TransitionDemo />
                </main>
            </section>
            <section className={styles.section}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Deferred Search</h2>
                </header>
                <main className={styles.main}>
                    <DeferredSearchDemo />
                </main>
            </section>
            <section className={styles.section}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Imperative Handle</h2>
                </header>
                <main className={styles.main}>
                    <ImperativeHandleDemo />
                </main>
            </section>
            <section className={styles.section}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Action State</h2>
                </header>
                <main className={styles.main}>
                    <ActionStateDemo />
                </main>
            </section>
        </>
    );
}
