import React, {useState} from 'react';
import './index.scss';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, OPTIONS, QUESTIONS} from '../../utils/constants/index.js';
import {Button} from '../../components/Button';
import {Dialog} from '../../components/Dialog/index.js';

export const QuestionScreen = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
    });
    console.log(answers);
    return (
        <motion.div
            {...ANIMATION.ENTRY_ANIMATION}
            className={'questions-container'}
        >
            <div className="background-layer" />
            <div className="content">
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: currentStep > 0 ? 1.8 : 1,
                            },
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        key={currentStep}
                        className={'dialog-container'}
                    >
                        <Dialog text={QUESTIONS[currentStep].dialog} />
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                            translateY: '100vh',
                        }}
                        animate={{
                            opacity: 1,
                            translateY: '34vh',
                            transition: {
                                duration: 1,
                                type: 'spring',
                                delay: currentStep > 0 ? 2.3 : 1.5,
                            },
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        key={currentStep}
                        className="details"
                    >
                        <p>{QUESTIONS[currentStep].name}</p>
                        <p>
                            {QUESTIONS[currentStep].designation} •{' '}
                            {QUESTIONS[currentStep].age}
                        </p>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    <motion.img
                        key={currentStep}
                        style={{
                            translateY: '3vh',
                        }}
                        initial={{
                            opacity: 0,
                            translateX: '100vw',
                        }}
                        animate={{
                            opacity: 1,
                            translateX: '32vw',
                            transition: {
                                type: 'spring',
                                duration: 1.4,
                                delay: currentStep > 0 ? 1 : 0.2,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            translateX: '100vw',
                            transition: {delay: 0.15, duration: 0.7},
                        }}
                        className={'character'}
                        src={QUESTIONS[currentStep].characterImage}
                    />
                </AnimatePresence>
            </div>
            <motion.div
                initial={{
                    translateY: '100vh',
                }}
                animate={{
                    translateY: 0,
                    transition: {
                        duration: 1,
                        delay: currentStep > 0 ? 2.3 : 1.5,
                        type: 'spring',
                    },
                }}
                exit={{
                    opacity: 0,
                    translateY: '100vh',
                    transition: {delay: 2, duration: 0.7},
                }}
                key={currentStep}
                className={'options-container'}
            >
                <div>
                    <p className={'question'}>
                        Is this statement a fact, opinion or idea?
                    </p>
                    <div className="options">
                        {OPTIONS.map((item, index) => (
                            <motion.div
                                onClick={() => {
                                    setAnswers((prevState) => ({
                                        ...prevState,
                                        [currentStep + 1]: item,
                                    }));
                                }}
                                whileTap={{
                                    scale: 1.05,
                                }}
                                key={index}
                                className={`${
                                    answers[currentStep + 1] === item
                                        ? 'active'
                                        : ''
                                }`}
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
                        label={'Next'}
                        disabled={answers[currentStep + 1] === ''}
                        onClick={() => {
                            if (currentStep < QUESTIONS.length - 1) {
                                setCurrentStep((prevState) => prevState + 1);
                            }
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};
