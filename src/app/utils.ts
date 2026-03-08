

export const createTask = async (text: string) => {


    const tasks = await fetch(`${getOrigin()}/tasks`, {method: 'POST', body: JSON.stringify({text})});

    if (tasks.ok && tasks.status === 201) {
        return tasks.json();
    }

   throw new Error(tasks.statusText);
}

function getOrigin(): string {
    return `${window.location.origin}/api`;
}