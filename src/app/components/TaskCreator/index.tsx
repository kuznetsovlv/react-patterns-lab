import {memo, useState} from 'react';
import styles from './TaskCreator.module.scss';

import type {Task} from '@/app/types'
import {createTask} from '@/app/utils'

interface TaskCreatorProps {
    onCreate(tasks: Task[]): void;
}

const TaskCreator = memo<TaskCreatorProps>(function TaskCreator({onCreate})  {
    const [text, setText] = useState<string>('');

    return <div className={styles.creator}>
        <input className={styles.input} type="text" value={text} onChange={({target: {value}}) => setText(value) }/>
        <input className={styles.button} type="button" value="Add" disabled={!text} onClick={() => {
            const tasks = createTask(text);
           tasks.then(onCreate, console.log).finally(() => setText(''));
        }}/>
    </div>
});

export default TaskCreator