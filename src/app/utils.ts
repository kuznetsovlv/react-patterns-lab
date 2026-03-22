import type {ResponseIP} from './types';

export const askIP = async (): Promise<ResponseIP> => {
    const data = await fetch(`${getOrigin()}/ip`, {method: 'GET'});

    if (data.ok) {
        return data.json();
    }

    throw new Error(data.statusText);
};

function getOrigin(): string {
    return `${window.location.origin}/api`;
}
