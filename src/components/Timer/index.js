import React from 'react';
import './index.scss';
import {TIMER_SECONDS} from 'utils/constants';
import ClockIcon from 'assets/images/Clock.svg';
import {motion} from 'framer-motion';

export const Timer = ({time = TIMER_SECONDS}) => {
    return (
        <motion.div
            initial={{opacity: 1}}
            className={'timer'}
            data-value={time}
        >
            <img src={ClockIcon} />
            <motion.p
                initial={{
                    color: '#ffffff',
                }}
                animate={{
                    color:
                        time < 60 ? '#db3131' : time < 241 ? '#ea9d04' : '#fff',
                    opacity: 1,
                    transition: {
                        duration: 0.9,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    },
                }}
            >
                {new Date(time * 1000).toISOString().substring(14, 19) ??
                    '--:--'}
            </motion.p>
        </motion.div>
    );
};
