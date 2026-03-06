import React from 'react';
import styles from './TaskList.module.scss'

import type {Task} from '@/app/types'
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onChange(task: Task): void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onChange}) => {
    return <ul className={styles.list}>
        {tasks.map((task) => (<TaskItem key={task.id} className={styles.item} {...task} onChange={onChange} />))}
    </ul>
}

export default TaskList;