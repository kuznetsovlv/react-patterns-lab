'use client';

import {useRef} from 'react';

import type {ImperativeInputHandle} from './typed';
import ImperativeInput from './ImperativeInput';
import styles from './ImperativeHandleDemo.module.scss';

export default function ImperativeHandleDemo() {
    const ref = useRef<ImperativeInputHandle>(null);

    return (
        <>
            <ImperativeInput ref={ref} />
            <div className={styles.buttons}>
                <input
                    type="button"
                    value="Focus"
                    onClick={() => ref.current?.focus()}
                />
                <input
                    type="button"
                    value="Select"
                    onClick={() => ref.current?.select()}
                />
                <input
                    type="button"
                    value="Clear"
                    onClick={() => ref.current?.clear()}
                />
            </div>
        </>
    );
}
