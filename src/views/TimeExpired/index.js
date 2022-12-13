import React, {useEffect} from 'react';
import './index.scss';
import {motion} from 'framer-motion';
import {ANIMATION, TIMER_SECONDS} from 'utils/constants';
import ClockIcon from 'assets/images/Clock.svg';
import {Dialog} from 'components/Dialog';
import FarmerImage from 'assets/images/farmer-full.png';
import {storage} from 'services/storage';
import {GC} from 'services/gameCenterService';

export const TimeExpired = () => {
    useEffect(() => {
        setTimeout(() => {
            let existingGameData = storage.get.gameData();
            let gameData = {
                ...existingGameData,
                timeTaken: TIMER_SECONDS,
            };
            storage.set.gameData(gameData);
            GC.sendGameDataSaveMessage(gameData);
            GC.sendGameEndMessage();
        }, 5000);
    }, []);

    return (
        <motion.div
            {...ANIMATION.ENTRY_ANIMATION}
            className={'time-expired-screen'}
        >
            <div className="background-layer-2" />
            <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                <img src={ClockIcon} />
                <motion.p
                    initial={{
                        color: '#ffffff',
                    }}
                    animate={{
                        color: '#db3131',
                        opacity: 1,
                        transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        },
                    }}
                >
                    00:00
                </motion.p>
                <p>left of 08:00</p>
            </motion.div>
            <motion.div {...ANIMATION.REVEAL} className={'bordered-heading'}>
                <p>Uh oh! Your time expired.</p>
            </motion.div>
            <div className="contents">
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: '-50vw',
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            delay: 0.8,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className={'dialog-container'}
                >
                    <Dialog
                        text={'Thank you! For helping all the villagers.'}
                    />
                </motion.div>
                <motion.img
                    initial={{
                        translateX: '100vw',
                    }}
                    animate={{
                        translateX: '27vw',
                        transition: {
                            delay: 0.8,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    exit={{opacity: 0}}
                    className={'character'}
                    src={FarmerImage}
                />
            </div>
        </motion.div>
    );
};
