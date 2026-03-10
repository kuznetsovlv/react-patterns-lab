import {readFileSync, existsSync, writeFileSync, mkdirSync} from 'node:fs';
import {join} from 'node:path';

import type {Task} from '@/app/types';

const dir = 'data';
const file = 'tasks.json';
const filePath = join(dir, file);

export const getTasks = async (): Promise<Task[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return readTasks();
};

export const addTask = async (text: string): Promise<Task> => {
    const tasks: Task[] = await getTasks();

    const task = {
        id: crypto.randomUUID(),
        text,
        completed: false,
    };

    tasks.push(task);

    writeTasks(tasks);

    return task;
};

export const toggleTask = async (id: string): Promise<Task | null> => {
    const tasks: Task[] = await getTasks();
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return null;
    }

    task.completed = !task.completed;

    writeTasks(tasks);

    return task;
};

export const deleteTask = async (id: string): Promise<boolean> => {
    const tasks: Task[] = await getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index < 0) {
        return false;
    }

    tasks.splice(index, 1);
    writeTasks(tasks);
    return true;
};

function readTasks(): Task[] {
    if (existsSync(filePath)) {
        const data = readFileSync(filePath, 'utf8') || '[]';
        return JSON.parse(data) as Task[];
    }
    writeTasks([]);
    return readTasks();
}

function writeTasks(tasks: Task[]): void {
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }
    writeFileSync(filePath, JSON.stringify(tasks), 'utf8');
}
