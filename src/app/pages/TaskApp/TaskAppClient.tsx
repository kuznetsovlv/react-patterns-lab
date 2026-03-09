'use client'

import  {useCallback, useState, memo} from 'react';
import type {Task} from "@/app/types";
import {Stats, TaskCreator, TaskList} from "@/app/components";

interface TaskAppClientProps {
    tasks: Task[];
}

export default memo<TaskAppClientProps>(function TaskAppClient({tasks: initialTasks}) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleAddTask = useCallback((task: Task) => setTasks(tasks => [...tasks, task]), []);
    const handleChangeTask = useCallback(({id, ...rest}: Task) => setTasks(tasks => tasks.map((task) => task.id === id ? {id, ...rest} : task)), []);
    const handleDeleteTask = useCallback((id: string) => setTasks(tasks => tasks.filter((task) => task.id !== id)), [])

    return <>
        <TaskCreator onCreate={handleAddTask} />
        <TaskList tasks={tasks} onChange={handleChangeTask} onDelete={handleDeleteTask} />
        <Stats tasks={tasks} />
    </>
});