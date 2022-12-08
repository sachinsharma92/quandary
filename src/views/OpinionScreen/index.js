import React, {useCallback, useState} from 'react';
import './index.scss';
import {Button} from '../../components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, VILLAGERS_OPINIONS} from '../../utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {Opinion} from './components/Opinion';

export const OpinionScreen = () => {
    const history = useHistory();
    const {selectedOptionsKey = ''} = history.location.state || {};
    console.log(history.location.state);
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState({
        1: {},
        2: {},
        3: {},
        4: {},
    });

    const activeOpinion =
        VILLAGERS_OPINIONS[selectedOptionsKey]?.[currentStep - 1] || {};

    const onSelectOpinion = useCallback(
        (opinionId, value) => {
            setAnswers((prevState) => ({
                ...prevState,
                [currentStep]: {
                    ...prevState[currentStep],
                    [opinionId]: value,
                },
            }));
        },
        [currentStep],
    );
    console.log('activeOpinion', answers);
    return (
        <div className={'opinion-screen'}>
            <div className="background-layer-2" />
            <div style={{zIndex: 0}}>
                <AnimatePresence>
                    <div className={'heading'}>
                        <motion.p key={currentStep} {...ANIMATION.REVEAL}>
                            {activeOpinion.villagerName} has given his views on
                            both the solutions. Please select if you agree or
                            disagree with his opinions.
                        </motion.p>
                    </div>
                </AnimatePresence>
                <div className="contents">
                    <AnimatePresence>
                        <motion.img
                            key={currentStep}
                            style={{translateX: '-50%'}}
                            initial={{
                                opacity: 0,
                                translateY: '15vh',
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                                transition: {
                                    delay: 0.5,
                                    type: 'spring',
                                    stiffness: 50,
                                },
                            }}
                            exit={{opacity: 0}}
                            className={'char-img'}
                            src={activeOpinion.characterImage}
                        />
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                            key={currentStep}
                            initial={{
                                opacity: 0,
                                translateY: '20vh',
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                                transition: {
                                    delay: 0.57,
                                    type: 'spring',
                                    stiffness: 50,
                                },
                            }}
                            exit={{opacity: 0}}
                            className={'opinions'}
                        >
                            {activeOpinion.opinions?.map((item, index) => (
                                <Opinion
                                    onSelectOpinion={onSelectOpinion}
                                    selected={answers[currentStep]}
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <AnimatePresence>
                {Object.values(answers[currentStep]).length === 2 && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {duration: 0.3},
                        }}
                        exit={{opacity: 0}}
                        style={{alignSelf: 'flex-end'}}
                    >
                        <Button
                            onClick={() => {
                                if (currentStep < 4)
                                    setCurrentStep(
                                        (prevState) => prevState + 1,
                                    );
                                else
                                    history.push('/final-decision', {
                                        selectedOptionsKey,
                                    });
                            }}
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
