import {useTransition, useEffect, useState, memo} from 'react';

import {askIP} from '@/app/utils';

export default memo(function IP() {
    const [error, setError] = useState<string>('');
    const [ip, setIP] = useState<string | null>(null);

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            try {
                const {ip} = await askIP();
                setIP(ip);
            } catch (error) {
                setError((error as Error).message);
            }
        });
    }, []);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="accent-red-800 bg-red-400">{error}</div>;
    }

    return ip ? (
        <div className="flex flex-nowrap items-center justify-start gap-1">
            <div>Your IP:</div>
            {ip}
        </div>
    ) : (
        <div>Can not realise your ip address.</div>
    );
});
