'use client';

import {useState, useMemo, useCallback, ChangeEvent} from 'react';
import {PageIds} from './types';
import type {SelectorProps} from './types';
import {pageList, defaultPage} from './constants';
import Page from './Page';

export default function Selector(props: SelectorProps) {
    const [pageId, setPageId] = useState<PageIds>(PageIds.NONE);

    const page = useMemo(
        () => pageList.find(({id}) => id === pageId) ?? defaultPage,
        [pageId]
    );

    const handleSelect = useCallback(
        ({
            target: {value},
        }: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) =>
            setPageId(value as PageIds),
        []
    );

    return (
        <section className="rounded-2xl border p-6 shadow-sm space-y-4 overflow-auto h-full">
            <h2 className="text-xl font-semibold  flex justify-center items-center">
                <select
                    value={pageId}
                    onChange={handleSelect}
                >
                    {pageList.map(({id, title}) => (
                        <option
                            key={id}
                            value={id}
                        >
                            {title}
                        </option>
                    ))}
                </select>
            </h2>
            <Page
                {...page}
                {...props}
            />
        </section>
    );
}
