import {useEffect, useRef, useState} from 'react';
import {TIMER_SECONDS} from 'utils/constants/index.js';

export const useTimer = (time = TIMER_SECONDS) => {
    const [timeLeft, setTimeLeft] = useState(time);
    const interval = useRef(0);

    useEffect(() => {
        if (timeLeft === 0) {
            clearInterval(interval.current);
        }
    }, [timeLeft]);

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimeLeft((ps) => ps - 1);
        }, 1000);

        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return [timeLeft];
};
