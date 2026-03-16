'use client';

import {useActionState, memo} from 'react';
import styles from './ActionStateDemo.module.scss';

import {createTaskActionState} from '@/app/actions/tasks';
import type {ActionState} from '@/app/types';

export default memo(function ActionStateDemo() {
    const [state, formAction, isPending] = useActionState<
        ActionState | null,
        FormData
    >(createTaskActionState, null);

    console.log(state);

    return (
        <>
            <form
                className={styles.creator}
                action={formAction}
            >
                <input
                    className={styles.input}
                    type="text"
                    name="text"
                />
                <input
                    className={styles.button}
                    type="submit"
                    value="Add"
                    disabled={isPending}
                />
            </form>
            {state?.error && <p className={styles.error}>{state.error}</p>}
        </>
    );
});
