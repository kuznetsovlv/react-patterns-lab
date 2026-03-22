import {useRef} from 'react';

import type {ImperativeInputHandle} from './types';
import ImperativeInput from './ImperativeInput';
import styles from './ImperativeHandleDemo.module.scss';

export default function ImperativeHandleDemo() {
    const inputRef = useRef<ImperativeInputHandle>(null);

    return (
        <>
            <ImperativeInput ref={inputRef} />
            <div className={styles.buttons}>
                <input
                    type="button"
                    value="Focus"
                    onClick={() => inputRef.current?.focus()}
                />
                <input
                    type="button"
                    value="Select"
                    onClick={() => inputRef.current?.select()}
                />
                <input
                    type="button"
                    value="Clear"
                    onClick={() => inputRef.current?.clear()}
                />
            </div>
        </>
    );
}
