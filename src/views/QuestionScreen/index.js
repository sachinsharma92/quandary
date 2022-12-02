import React, {useState} from 'react';
import './index.scss';
import {motion} from 'framer-motion';
import {ANIMATION, OPTIONS, QUESTIONS} from '../../utils/constants/index.js';
import {Button} from '../../components/Button';
import {Dialog} from '../../components/Dialog/index.js';
import Farmer from '../../assets/images/farmer.png';

export const QuestionScreen = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <motion.div
            {...ANIMATION.ENTRY_ANIMATION}
            className={'questions-container'}
        >
            <div className="background-layer" />
            <div className="content">
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {duration: 0.6, delay: 1.6},
                    }}
                    className={'dialog-container'}
                >
                    <Dialog text={QUESTIONS[currentStep].dialog} />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        bottom: 0,
                    }}
                    animate={{
                        opacity: 1,
                        translateY: '-47vh',
                        transition: {
                            duration: 1,
                            type: 'spring',
                            delay: 1,
                        },
                    }}
                    className="details"
                >
                    <p>{QUESTIONS[currentStep].name}</p>
                    <p>
                        {QUESTIONS[currentStep].designation} •{' '}
                        {QUESTIONS[currentStep].age}
                    </p>
                </motion.div>
                <motion.img
                    initial={{
                        opacity: 0,
                        bottom: 0,
                    }}
                    animate={{
                        opacity: 1,
                        translateY: '-17vh',
                        transition: {
                            duration: 1,
                            type: 'spring',
                            delay: 1,
                        },
                    }}
                    className={'character'}
                    src={QUESTIONS[currentStep].characterImage}
                />
            </div>
            <motion.div
                initial={{
                    y: '100vh',
                }}
                animate={{
                    y: 0,
                    transition: {duration: 1},
                }}
                className={'options-container'}
            >
                <div>
                    <p className={'question'}>
                        Is this statement a fact, opinion or idea?
                    </p>
                    <div className="options">
                        {OPTIONS.map((item, index) => (
                            <motion.div
                                whileTap={{
                                    scale: 1.05,
                                }}
                                key={index}
                            >
                                <p>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={'villager-count'}>
                    <div>
                        <span>{currentStep + 1}</span>
                        <span>/{QUESTIONS.length} villager</span>
                    </div>
                    <Button
                        onClick={() => {
                            if (currentStep < QUESTIONS.length - 1)
                                setCurrentStep((prevState) => prevState + 1);
                        }}
                        label={'Next'}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};
