import React, {useCallback, useEffect, useState} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {
    ANIMATION,
    TIMER_SECONDS,
    VILLAGERS_OPINIONS,
} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {Opinion} from './components/Opinion';
import {useMediaQuery} from 'react-responsive';
import {storage} from 'services/storage/index.js';
import {GC} from 'services/gameCenterService/index.js';

export const OpinionScreen = () => {
    const desktopScreen = useMediaQuery({query: '(min-width: 1024px)'});
    const history = useHistory();
    const {selectedOptionsKey = '', gameData = {}} =
        history.location.state || {};

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

    useEffect(() => {
        //resume game level
        if (!!gameData.lastStep) {
            if (gameData.lastStep < 3) {
                setCurrentStep(gameData.lastStep + 1);
            } else
                history.replace('/game/final-decision', {
                    selectedOptionsKey,
                });
        }
    }, [gameData]);

    const saveData = useCallback(() => {
        let time = document.querySelector('.timer')?.getAttribute('data-value');

        let existingGameData = storage.get.gameData();
        let gameData = {
            ...existingGameData,
            opinions: {
                ...existingGameData?.opinions,
                ...answers,
            },
            timeTaken: TIMER_SECONDS - time,
            lastRoute: window.location.pathname,
            lastStep: currentStep,
        };
        storage.set.gameData(gameData);
        console.log(gameData);
        GC.sendGameDataSaveMessage(gameData);
    }, [answers, currentStep]);

    return (
        <div className={'opinion-screen'}>
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
                            src={
                                !desktopScreen
                                    ? activeOpinion.characterImage
                                    : activeOpinion.characterDesktopImage
                            }
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
                        className="btn-center"
                    >
                        <Button
                            onClick={() => {
                                saveData();
                                if (currentStep < 4)
                                    setCurrentStep(
                                        (prevState) => prevState + 1,
                                    );
                                else {
                                    history.push('/game/final-decision', {
                                        selectedOptionsKey,
                                    });
                                }
                            }}
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
