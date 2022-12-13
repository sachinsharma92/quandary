import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import {TIMER_SECONDS} from 'utils/constants';
import ClockIcon from 'assets/images/Clock.svg';
import {AnimatePresence, motion} from 'framer-motion';
import {storage} from '../../services/storage/index.js';
import {TimeExpired} from '../../views/TimeExpired';

export const Timer = ({startTicker = true}) => {
    const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
    const [hasClicked, setHasClicked] = useState(true);
    const interval = useRef(0);

    useEffect(() => {
        if (timeLeft === 0) {
            clearInterval(interval.current);
        }
    }, [timeLeft]);

    useEffect(() => {
        let gameData = storage.get.gameData();
        if (!!gameData?.timeTaken) {
            setTimeLeft(TIMER_SECONDS - gameData?.timeTaken);
            setHasClicked(false);
        } else {
            if (startTicker)
                interval.current = setInterval(() => {
                    setTimeLeft((ps) => ps - 1);
                }, 1000);
        }
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return timeLeft !== 0 ? (
        <>
            <motion.div
                initial={{opacity: 1}}
                className={'timer'}
                data-value={timeLeft}
            >
                <img src={ClockIcon} />
                <motion.p
                    initial={{
                        color: '#ffffff',
                    }}
                    animate={{
                        color:
                            timeLeft < 60
                                ? '#db3131'
                                : timeLeft < 241
                                ? '#ea9d04'
                                : '#fff',
                        opacity: 1,
                        transition: {
                            duration: 0.9,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        },
                    }}
                >
                    {new Date(timeLeft * 1000)
                        .toISOString()
                        .substring(14, 19) ?? '--:--'}
                </motion.p>
            </motion.div>
            <AnimatePresence>
                {!hasClicked && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{opacity: 1, transition: {duration: 0.6}}}
                        exit={{opacity: 0}}
                        onClick={() => {
                            setHasClicked(true);
                            interval.current = setInterval(() => {
                                setTimeLeft((ps) => ps - 1);
                            }, 1000);
                        }}
                        className={'resume-gameplay'}
                    >
                        <div className={'heading'}>
                            <p>Click to resume</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    ) : (
        <TimeExpired />
    );
};
