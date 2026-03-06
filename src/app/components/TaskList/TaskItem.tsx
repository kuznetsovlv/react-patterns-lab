import {memo} from 'react';

import type {Task} from '@/app/types'

interface TaskItemProps extends Task {
    className?: string;
    onChange(task: Task): void;
}

// eslint-disable-next-line react/display-name
const TaskItem = memo<TaskItemProps>(({id, text, completed, className, onChange}) =>  <li className={className}>
        <input id={id} name={id}  type="checkbox" checked={completed} onClick={() => onChange({id, text, completed: !completed})} />
        <label htmlFor={id}>{text}</label>
    </li>);

export default TaskItem;
