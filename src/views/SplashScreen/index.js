import React from 'react';
import './index.scss';
import Farmer from 'assets/images/farmer-full.png';
import {Button} from 'components/Button';
import {Dialog} from 'components/Dialog/index.js';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ANIMATION} from 'utils/constants/index.js';

export const SplashScreen = () => {
    const history = useHistory();
    return (
        <motion.div {...ANIMATION.ENTRY_ANIMATION} className={'splash-screen'}>
            <motion.div {...ANIMATION.SLIDE_OUT_LEFT} className={'heading'}>
                <p>
                    Three weeks ago, a few sheep started disappearing from our
                    village.
                </p>
            </motion.div>
            <div className={'content'}>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: '-50vw',
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            delay: 0.9,
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
                        text={'It seems like some foxes are hunting the sheep.'}
                    />
                </motion.div>
                <motion.img
                    initial={{
                        translateX: '100vw',
                    }}
                    animate={{
                        translateX: 0,
                        transition: {
                            delay: 0.8,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    exit={{opacity: 0}}
                    className={'character'}
                    src={Farmer}
                />
            </div>
            <motion.div
                initial={{
                    translateY: '30vh',
                }}
                animate={{
                    translateY: 0,
                    transition: {
                        delay: 2.5,
                        type: 'spring',
                        stiffness: 50,
                    },
                }}
                className={'footer'}
            >
                <p className="description">
                    The villagers need your help in solving this problem.
                </p>
                <Button
                    onClick={() => history.push('/game/intro')}
                    label={'Next'}
                />
            </motion.div>
        </motion.div>
    );
};
