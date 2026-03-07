'use client'

import  {useCallback, useState, memo} from 'react';
import type {Task} from "@/app/types";
import {Stats, TaskCreator, TaskList} from "@/app/components";

export default memo(function TaskApp() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = useCallback((task: Task) => setTasks(tasks => [...tasks, task]), []);

    const handleChangeTask = useCallback(({id, ...rest}: Task) => setTasks(tasks => tasks.map((task) => task.id === id ? {id, ...rest} : task)), []);

    return <>
        <TaskCreator onAdd={handleAddTask} />
        <TaskList tasks={tasks} onChange={handleChangeTask} />
        <Stats tasks={tasks} />
    </>
});