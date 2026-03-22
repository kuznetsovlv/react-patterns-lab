import Selector from './Selector';
import {getTasks} from '@/app/lib/tasks-store';
import {getRandomNumber} from '@/app/lib/number-store';

export default function Main() {
    const tasksPromise = getTasks();
    const numberPromise = getRandomNumber();

    return (
        <main className="w-full max-h-dvh mx-auto max-w-5xl space-y-10 bg-white px-6 py-32 flex flex-col gap-10 flex-nowrap justify-start items-stretch">
            <h1 className="text-3xl font-bold tracking-tight text-center">
                React Hooks Playground
            </h1>
            <Selector
                tasksPromise={tasksPromise}
                numberPromise={numberPromise}
            />
        </main>
    );
}
