import {memo} from 'react';

import type {Task} from '@/app/types'
import {toggleTask, deleteTask} from '@/app/utils';

interface TaskItemProps extends Task {
    className?: string;
    onChange(task: Task): void;
    onDelete(id: string): void;
}

const TaskItem = memo<TaskItemProps>(function TaskItem({id, text, completed, className, onChange, onDelete}) {
   return <li className={className}>
        <input id={id} name={id} type="checkbox" checked={completed}
               onClick={() => toggleTask(id).then(onChange, console.log)}/>
        <label htmlFor={id}>{text}</label>
       <input type="button" value="-" onClick={() => deleteTask(id).then(() => onDelete(id), console.log)}/>
    </li>
})


export default TaskItem;
