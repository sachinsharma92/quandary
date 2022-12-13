import React, {useCallback, useEffect, useState} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, IMPACTS, TIMER_SECONDS} from 'utils/constants';
import {useHistory} from 'react-router-dom';
import {Solution} from './components/Solution/index.js';
import {storage} from 'services/storage/index.js';
import {GC} from 'services/gameCenterService/index.js';

export const ImpactSolutionScreen = () => {
    const history = useHistory();
    const {decision = '', gameData = {}} = history.location.state || {};
    const [solution, setSolution] = useState(null);

    const onSelectSolution = useCallback((value) => {
        setSolution(value);
    }, []);

    useEffect(() => {
        if (!!gameData.lastRoute && !!gameData.postSolution)
            history.replace('/game/thank-you');
    }, [gameData]);

    return (
        <div className={'impact-solution-screen'}>
            <div style={{zIndex: 0}}>
                <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                    <p>What would you do now?</p>
                    <p>Select any one option</p>
                </motion.div>
                <div className="contents">
                    {IMPACTS[decision]?.extendedSuggestions.map(
                        (item, index) => (
                            <Solution
                                itemIndex={index}
                                isSelected={solution === item.text}
                                onSelectSolution={onSelectSolution}
                                id={item.id}
                                key={item.id}
                                text={item.text}
                            />
                        ),
                    )}
                </div>
            </div>
            <AnimatePresence>
                {solution && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className={'footer'}
                    >
                        <Button
                            onClick={() => {
                                let time = document
                                    .querySelector('.timer')
                                    ?.getAttribute('data-value');

                                let existingGameData = storage.get.gameData();
                                let gameData = {
                                    ...existingGameData,
                                    postSolution: solution,
                                    timeTaken: TIMER_SECONDS - time,
                                    lastRoute: window.location.pathname,
                                };
                                storage.set.gameData(gameData);
                                console.log(gameData);
                                GC.sendGameDataSaveMessage(gameData);
                                history.push('/game/thank-you');
                            }}
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
