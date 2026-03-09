import {memo, useState} from 'react';
import styles from './TaskCreator.module.scss';

import type {Task} from '@/app/types'
import {createTask} from '@/app/utils'

interface TaskCreatorProps {
    onCreate(task: Task): void;
}

const TaskCreator = memo<TaskCreatorProps>(function TaskCreator({onCreate})  {
    const [text, setText] = useState<string>('');

    return <form className={styles.creator} onSubmit={(event) => {
        event.preventDefault();
        const tasks = createTask(text);
        tasks.then(onCreate, console.log).finally(() => setText(''));
    }}>
        <input className={styles.input} type="text" name="text" value={text} onChange={({target: {value}}) => setText(value) }/>
        <input className={styles.button} type="submit" value="Add" disabled={!text} />
    </form>
});

export default TaskCreator