

export const createTask = async (text: string) => {


    const tasks = await fetch(`${getOrigin()}/tasks`, {method: 'POST', body: JSON.stringify({text})});

    if (tasks.ok) {
        return tasks.json();
    }

   throw new Error(tasks.statusText);
};

export const toggleTask = async (id: string) => {
    const task = await fetch(`${getOrigin()}/tasks/${id}`, {method: 'PATCH'});

    if(task.ok) {
        return task.json();
    }

    throw new Error(task.statusText);

};

export const deleteTask = async (id: string) => {
    const result = await fetch(`${getOrigin()}/tasks/${id}`, {method: 'DELETE'});

    if(result.ok) {
        return;
    }

    throw new Error(result.statusText);
}

function getOrigin(): string {
    return `${window.location.origin}/api`;
}