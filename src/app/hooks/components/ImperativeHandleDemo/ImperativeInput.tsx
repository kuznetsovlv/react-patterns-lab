import {useImperativeHandle, forwardRef, useRef, useState} from 'react';

import type {ImperativeInputHandle} from './typed';

export default forwardRef<ImperativeInputHandle, {}>(
    function ImperativeInput(_, ref) {
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
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }
);
