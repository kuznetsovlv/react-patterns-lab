import {useMemo, useState, useTransition} from 'react';

const items = Array.from({length: 100000}, (_, i) => `Task item ${i}`);

function slowIncludes(text: string, query: string) {
    for (let i = 0; i < 2000; i++) {
        // artificial load
        Math.sqrt(i * 42);
    }

    return text.toLowerCase().includes(query.toLowerCase());
}

export default function TransitionDemo() {
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');
    const [isPending, startTransition] = useTransition();

    const filteredItems = useMemo(() => {
        if (!filter) return items;

        return items.filter((item) => slowIncludes(item, filter));
    }, [filter]);

    return (
        <>
            <input
                className="border px-1 bg-blue-50 border-r-2"
                value={input}
                onChange={(event) => {
                    const value = event.target.value;
                    setInput(value);

                    startTransition(() => {
                        setFilter(value);
                    });
                }}
                placeholder="Type to filter..."
            />

            {isPending && <p>Updating list...</p>}

            <p>
                Input: <strong>{input}</strong>
            </p>
            <p>
                Active filter: <strong>{filter}</strong>
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
