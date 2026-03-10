import React from 'react';

import TaskAppClient from './TaskAppClient';
import {getTasks} from '@/app/lib/tasks-store';

export default async function TaskApp() {
    const tasks = await getTasks();

    return <TaskAppClient tasks={tasks} />;
}
