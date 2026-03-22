import {use} from 'react';

interface UseDemoProps {
    numberPromise: Promise<number>;
}

export default function UseDemo({numberPromise}: UseDemoProps) {
    const number = use(numberPromise);

    return <p>{number}</p>;
}
