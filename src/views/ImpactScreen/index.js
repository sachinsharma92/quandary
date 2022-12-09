import React from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {motion} from 'framer-motion';
import {ANIMATION, IMPACTS} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {Dialog} from 'components/Dialog/index.js';
import FarmerImage from 'assets/images/farmer-full.png';

export const ImpactScreen = () => {
    const history = useHistory();
    const {decision = ''} = history.location.state || {};

    return (
        <div className={'impact-screen'}>
            <div className="background-layer-2" />
            <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                <p>{IMPACTS[decision].heading}</p>
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
                    <Dialog text={IMPACTS[decision].statement} />
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
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.8,
                    },
                }}
                exit={{
                    opacity: 0,
                }}
                className={'footer'}
            >
                <Button
                    onClick={() => {
                        history.push('/impact-solutions', {
                            decision,
                        });
                    }}
                    label={'Next'}
                />
            </motion.div>
        </div>
    );
};
