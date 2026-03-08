'use client'

import  {useCallback, useState, memo} from 'react';
import type {Task} from "@/app/types";
import {Stats, TaskCreator, TaskList} from "@/app/components";

interface TaskAppProps {
    tasks: Task[];
}

export default memo<TaskAppProps>(function TaskApp({tasks: initialTasks}) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);



    const handleChangeTask = useCallback(({id, ...rest}: Task) => setTasks(tasks => tasks.map((task) => task.id === id ? {id, ...rest} : task)), []);

    return <>
        <TaskCreator onCreate={setTasks} />
        <TaskList tasks={tasks} onChange={handleChangeTask} />
        <Stats tasks={tasks} />
    </>
});