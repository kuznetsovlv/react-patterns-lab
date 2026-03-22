import {useImperativeHandle, useRef, useState} from 'react';
import type {RefObject} from 'react';

import type {ImperativeInputHandle} from './types';

interface ImperativeInputProps {
    ref: RefObject<ImperativeInputHandle | null>;
}

export default function ImperativeInput({ref}: ImperativeInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    useImperativeHandle(
        ref,
        () => ({
            focus() {
                inputRef.current?.focus();
            },
            clear() {
                setValue('');
            },
            select() {
                inputRef.current?.select();
            },
        }),
        []
    );

    return (
        <input
            ref={inputRef}
            className="border px-1 bg-blue-50 border-r-2"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
