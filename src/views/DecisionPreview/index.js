import React from 'react';
import './index.scss';
import {Button} from '../../components/Button';
import {motion} from 'framer-motion';
import {ANIMATION, IMPACTS} from '../../utils/constants/index.js';
import {useHistory} from 'react-router-dom';

export const DecisionPreview = () => {
    const history = useHistory();
    const {decision = ''} = history.location.state || {};

    return (
        <div className={'decision-preview-screen'}>
            <div className="background-layer-2" />
            <div className={'heading'}>
                <motion.p {...ANIMATION.REVEAL}>
                    You chose to {IMPACTS[decision]?.label?.toLowerCase()}
                </motion.p>
            </div>
            <div className="contents">
                <motion.img
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                        transition: {
                            duration: 1,
                            delay: 0.7,
                            type: 'spring',
                        },
                    }}
                    exit={{scale: 0}}
                    src={IMPACTS[decision]?.icon}
                />
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 0.7}}}
                    exit={{opacity: 0}}
                >
                    {IMPACTS[decision]?.label}
                </motion.p>
            </div>
            <motion.div
                initial={{
                    translateY: '30vh',
                }}
                animate={{
                    translateY: 0,
                    transition: {
                        delay: 0.9,
                        type: 'spring',
                        stiffness: 50,
                    },
                }}
                className={'footer'}
            >
                <p>Let’s see what impact this solution had on the village.</p>
                <Button
                    onClick={() => {
                        history.push('/impact', {
                            decision,
                        });
                    }}
                    label={'Next'}
                />
            </motion.div>
        </div>
    );
};
