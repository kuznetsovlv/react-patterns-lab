import {use} from 'react';

async function getRandomNumber() {
    await new Promise((r) => setTimeout(r, 2000));
    return Math.random();
}

export default function UseDemo() {
    const number = use(getRandomNumber());

    return <p>{number}</p>;
}
