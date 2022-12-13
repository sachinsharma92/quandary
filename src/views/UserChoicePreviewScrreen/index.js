import React, {useMemo} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {motion} from 'framer-motion';
import {ANIMATION, SOLUTIONS} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';

export const UserChoicePreviewScreen = () => {
    const history = useHistory();
    const {choices = []} = history.location.state || {};

    const [choicesArr, selectedOptionsKey] = useMemo(() => {
        let arr = SOLUTIONS.filter((item) => choices.includes(item.id));
        return [arr, arr.map((i) => i.id).join('_')];
    }, [choices]);

    return (
        <motion.div
            {...ANIMATION.ENTRY_ANIMATION}
            className={'user-choice-preview-screen'}
        >
            <div className="background-layer-2" />
            <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                <p>You have selected below 2 options</p>
            </motion.div>
            <div className={'user-choices'}>
                {choicesArr.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 1,
                                delay: 0.2,
                                type: 'spring',
                            },
                        }}
                        exit={{scale: 0}}
                        className={'choice'}
                    >
                        <img src={item.icon} />
                        <p>{item.label}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{
                    translateY: '30vh',
                }}
                animate={{
                    translateY: 0,
                    transition: {
                        delay: 0.5,
                        type: 'spring',
                        stiffness: 50,
                    },
                }}
                className={'footer'}
            >
                <p>
                    Now before making your final decision, read the opinions of
                    the villagers on these 2 options.
                </p>
                <Button
                    onClick={() => {
                        history.push('/game/opinions', {
                            selectedOptionsKey,
                        });
                    }}
                    label={'Next'}
                />
            </motion.div>
        </motion.div>
    );
};
