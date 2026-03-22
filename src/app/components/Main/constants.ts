import {Page, PageIds} from './types';

export const defaultPage: Page = {id: PageIds.NONE, title: ''};

export const pageList: Page[] = [
    defaultPage,
    {id: PageIds.TASK_TRACKER, title: 'Task Tracker'},
    {id: PageIds.USE_HOOK, title: 'Demo use hook'},
    {id: PageIds.USE_ACTION_STATE_HOOK, title: 'Demo useActionState hook'},
    {id: PageIds.USE_DEFERRED_VALUE_HOOK, title: 'Demo useDeferredValue hook'},
    {id: PageIds.USE_TRANSITION_HOOK, title: 'Demo useTransition hook'},
    {
        id: PageIds.USE_IMPERATIVE_HANDLE_HOOK,
        title: 'Demo useImperativeHandle hook',
    },
    {id: PageIds.IP, title: 'IP Detector'},
];
