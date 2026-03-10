import {memo} from 'react';

import type {Task} from '@/app/types'
import {toggleTask, deleteTask} from '@/app/utils';

interface TaskItemProps extends Task {
    className?: string;
    disabled?: boolean;
    onChange(task: Task): void;
    onDelete(id: string): void;
}

const TaskItem = memo<TaskItemProps>(function TaskItem({id, text, completed, className, disabled = false, onChange, onDelete}) {

   return <li className={className}>
        <input id={id} name={id} type="checkbox" checked={completed} disabled={disabled}
               onChange={() => toggleTask(id).then(onChange, console.log)}
        />
        <label htmlFor={id}>{text}</label>
       <input type="button" value="-" disabled={disabled} onClick={() => deleteTask(id).then(() => onDelete(id), console.log)}/>
    </li>
})


export default TaskItem;
