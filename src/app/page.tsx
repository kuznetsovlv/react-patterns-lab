'use client'

import {useCallback, useState} from 'react'
import styles from './page.module.css';

import {TaskCreator, TaskList, Stats} from './components'

import type {Task} from './types'

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = useCallback((task: Task) => setTasks(tasks => [...tasks, task]), []);

    const handleChangeTask = useCallback(({id, ...rest}: Task) => setTasks(tasks => tasks.map((task) => task.id === id ? {id, ...rest} : task)), [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TaskCreator onAdd={handleAddTask} />
        <TaskList tasks={tasks} onChange={handleChangeTask} />
        <Stats tasks={tasks} />
      </main>
    </div>
  );
}
