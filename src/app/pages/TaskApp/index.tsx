import {use} from 'react';

import TaskAppClient from './TaskAppClient';
import {getTasks} from '@/app/lib/tasks-store';
import {TaskStatus} from '@/app/types';
import type {Task} from '@/app/types';

export default function TaskApp() {
    const tasks = use<Task[]>(getTasks());

    return (
        <TaskAppClient
            tasks={tasks.map((task) => ({...task, status: TaskStatus.READY}))}
        />
    );
}
