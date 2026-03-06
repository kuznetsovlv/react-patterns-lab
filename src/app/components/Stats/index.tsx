import React from 'react';
import styles from './Stats.module.scss'

import type {Task} from '@/app/types';

interface SpatsProps {
    tasks: Task[];
}

const Stats: React.FC<SpatsProps> = ({tasks}) => {
    const total = tasks.length;
    const completedCount = tasks.reduce((total, {completed}) => completed ? ++total : total, 0);

    return <div className={styles.stats}>
        <div className={styles.line}>
            <span className={styles.title}>Total:</span>
            <span className={styles.value}>{total}</span>
        </div>
        {!!total && <div className={styles.line}>
            <span className={styles.title}>Completed:</span>
            <span className={styles.value}>{completedCount}</span>
        </div>}
    </div>;
};

export default Stats;