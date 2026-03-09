import React from 'react';
import styles from './TaskList.module.scss'

import type {Task} from '@/app/types'
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onChange(task: Task): void;
    onDelete(id: string): void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onChange, onDelete}) => {
    return <ul className={styles.list}>
        {tasks.map((task) => (<TaskItem key={task.id} className={styles.item} {...task} onChange={onChange} onDelete={onDelete} />))}
    </ul>
}

export default TaskList;