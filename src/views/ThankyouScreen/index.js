import React, {useEffect} from 'react';
import './index.scss';
import {motion} from 'framer-motion';
import {ANIMATION} from 'utils/constants/index.js';
import {Dialog} from 'components/Dialog/index.js';
import FarmerImage from 'assets/images/farmer-full.png';
import {GC} from 'services/gameCenterService';

export const ThankyouScreen = () => {
    useEffect(() => {
        setTimeout(GC.sendGameEndMessage, 4000);
    }, []);

    return (
        <div className={'thank-screen'}>
            <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                <p>
                    On behalf of the whole village, your help is deeply
                    appreciated.
                </p>
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
                    <Dialog text={'Thank you! 🙏🏻'} />
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
        </div>
    );
};
