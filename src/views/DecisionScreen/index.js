import React, {useCallback, useEffect, useState} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {
    ANIMATION,
    FINAL_DECISIONS,
    TIMER_SECONDS,
} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {Decision} from './components/Decision';
import {storage} from 'services/storage/index.js';
import {GC} from '../../services/gameCenterService/index.js';

export const DecisionScreen = () => {
    const history = useHistory();
    const {selectedOptionsKey = '', gameData = {}} =
        history.location.state || {};

    const [decision, setDecision] = useState(null);

    const onSelectDecision = useCallback((value) => {
        setDecision(value);
    }, []);

    useEffect(() => {
        //resume game level
        if (!!gameData?.lastRoute && !!gameData?.finalDecision) {
            history.replace('/game/decision-preview', {
                decision: gameData.finalDecision,
            });
        }
    }, [gameData]);

    return (
        <div className={'decision-screen'}>
            <div style={{zIndex: 0}}>
                <div className={'heading'}>
                    <motion.p {...ANIMATION.REVEAL}>
                        Now choose your final decision
                    </motion.p>
                </div>
                <div className="contents">
                    <motion.div
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
                        className={'decisions'}
                    >
                        {FINAL_DECISIONS[selectedOptionsKey]?.map((item) => (
                            <Decision
                                onSelectOpinion={onSelectDecision}
                                selected={decision}
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {decision && (
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
                                let time = document
                                    .querySelector('.timer')
                                    ?.getAttribute('data-value');
                                let existingGameData = storage.get.gameData();
                                let gameData = {
                                    ...existingGameData,
                                    finalDecision: decision,
                                    timeTaken: TIMER_SECONDS - time,
                                    lastRoute: window.location.pathname,
                                };
                                storage.set.gameData(gameData);
                                console.log(gameData);
                                GC.sendGameDataSaveMessage(gameData);
                                history.push('/game/decision-preview', {
                                    decision,
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
