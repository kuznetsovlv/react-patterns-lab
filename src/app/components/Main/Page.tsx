import {lazy, Suspense} from 'react';
import {PageIds, PageProps} from './types';
import Skeleton from './Skeleton';

const TaskApp = lazy(() => import('@/app/pages/TaskApp'));
const UseDemo = lazy(() => import('@/app/pages/UseDemo'));
const TransitionTaskDemo = lazy(() => import('@/app/pages/TransitionTaskDemo'));
const DeferredSearchDemo = lazy(() => import('@/app/pages/DeferredSearchDemo'));
const ImperativeHandleDemo = lazy(
    () => import('@/app/pages/ImperativeHandleDemo')
);
const ActionStateDemo = lazy(() => import('@/app/pages/ActionStateDemo'));

export default function Page({id, tasksPromise, numberPromise}: PageProps) {
    switch (id) {
        case PageIds.TASK_TRACKER:
            return (
                <Suspense fallback={<Skeleton />}>
                    <TaskApp tasksPromise={tasksPromise} />
                </Suspense>
            );
        case PageIds.USE_HOOK:
            return (
                <Suspense fallback={<Skeleton />}>
                    <UseDemo numberPromise={numberPromise} />
                </Suspense>
            );
        case PageIds.USE_TRANSITION_HOOK:
            return (
                <Suspense fallback={<Skeleton />}>
                    <TransitionTaskDemo />
                </Suspense>
            );
        case PageIds.USE_DEFERRED_VALUE_HOOK:
            return (
                <Suspense fallback={<Skeleton />}>
                    <DeferredSearchDemo />
                </Suspense>
            );
        case PageIds.USE_IMPERATIVE_HANDLE_HOOK:
            return (
                <Suspense fallback={<Skeleton />}>
                    <ImperativeHandleDemo />
                </Suspense>
            );
        case PageIds.USE_ACTION_STATE_HOOK:
            return (
                <Suspense fallback={<Skeleton />}>
                    <TaskApp
                        tasksPromise={tasksPromise}
                        Input={
                            <Suspense fallback={<Skeleton />}>
                                <ActionStateDemo />
                            </Suspense>
                        }
                    />
                </Suspense>
            );
        default:
            return null;
    }
}
