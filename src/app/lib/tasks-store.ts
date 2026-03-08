import {readFileSync, existsSync, writeFileSync} from 'node:fs'

import type {Task} from '@/app/types';

const filePath = './tasks.json';

export const getTasks = (): Task[] => readTasks();

export const addTask = (text: string): Task[] => {
    const tasks: Task[] = getTasks();
    tasks.push({
        id: crypto.randomUUID(),
        text,
        completed: false,
    });

    writeTasks(tasks);

    return tasks;
};

export const toggleTask = (id: string): Task | null => {
    const tasks: Task[] = getTasks();
    const task = tasks.find((task) => task.id === id);

    if(!task) {
        return null;
    }

    task.completed = !task.completed;

    writeTasks(tasks);

    return task;
};

export const deleteTask = (id: string): boolean => {
    const tasks: Task[] = getTasks();
    const index = tasks.findIndex(task => task.id === id);
    if(index < 0) {
        return false;
    }

    tasks.splice(index, 1);
    writeTasks(tasks);
    return true;
};

function readTasks(): Task[] {
    if(existsSync(filePath)) {
        const data = readFileSync(filePath, 'utf8') || '[]';
        return JSON.parse(data) as Task[];
    }
    writeTasks([]);
    return readTasks();
}

function writeTasks(tasks: Task[]): void {
    writeFileSync(filePath, JSON.stringify(tasks), 'utf8');
}