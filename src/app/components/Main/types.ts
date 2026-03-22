import type {Task} from '@/app/types';

export enum PageIds {
    NONE = 'NONE',
    TASK_TRACKER = 'TASK_TRACKER',
    USE_HOOK = 'USE_HOOK',
    USE_TRANSITION_HOOK = 'USE_TRANSITION_HOOK',
    USE_DEFERRED_VALUE_HOOK = 'USE_DEFERRED_VALUE_HOOK',
    USE_IMPERATIVE_HANDLE_HOOK = 'USE_IMPERATIVE_HANDLE_HOOK',
    USE_ACTION_STATE_HOOK = 'USE_ACTION_STATE_HOOK',
    IP = 'IP',
}

export interface Page {
    id: PageIds;
    title: string;
}

export interface SelectorProps {
    tasksPromise: Promise<Task[]>;
    numberPromise: Promise<number>;
}

export interface PageProps extends Page, SelectorProps {}
