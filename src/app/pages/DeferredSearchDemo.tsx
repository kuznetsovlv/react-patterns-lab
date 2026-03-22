import {useMemo, useState, useDeferredValue} from 'react';

const items = Array.from({length: 100000}, (_, i) => `Task item ${i}`);

function slowIncludes(text: string, query: string) {
    for (let i = 0; i < 2000; i++) {
        // artificial load
        Math.sqrt(i * 42);
    }

    return text.toLowerCase().includes(query.toLowerCase());
}

export default function DeferredSearchDemo() {
    const [input, setInput] = useState('');
    const deferredFilter = useDeferredValue(input);

    const filteredItems = useMemo(() => {
        if (!deferredFilter) return items;

        return items.filter((item) => slowIncludes(item, deferredFilter));
    }, [deferredFilter]);

    return (
        <>
            <input
                className="border px-1 bg-blue-50 border-r-2"
                value={input}
                onChange={(event) => {
                    const value = event.target.value;
                    setInput(value);
                }}
                placeholder="Type to filter..."
            />

            <p>
                Input: <strong>{input}</strong>
            </p>
            <p>
                deferredFilter: <strong>{deferredFilter}</strong>
            </p>
            <p>
                Results: <strong>{filteredItems.length}</strong>
            </p>

            <ul>
                {filteredItems.slice(0, 50).map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}
