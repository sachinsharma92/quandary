import React, {useEffect} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {motion} from 'framer-motion';
import {ANIMATION, IMPACTS, TIMER_SECONDS} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {storage} from 'services/storage/index.js';
import {GC} from 'services/gameCenterService/index.js';

export const DecisionPreview = () => {
    const history = useHistory();
    const {decision = '', gameData = {}} = history.location.state || {};

    useEffect(() => {
        //resume game level
        if (!!gameData?.lastRoute && !!gameData?.finalDecision) {
            history.replace('/game/impact', {
                decision: gameData?.finalDecision,
            });
        }
    }, [gameData]);

    return (
        <div className={'decision-preview-screen'}>
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
                        let time = document
                            .querySelector('.timer')
                            ?.getAttribute('data-value');
                        let existingGameData = storage.get.gameData();
                        let gameData = {
                            ...existingGameData,
                            timeTaken: TIMER_SECONDS - time,
                            lastRoute: window.location.pathname,
                        };
                        storage.set.gameData(gameData);
                        GC.sendGameDataSaveMessage(gameData);
                        history.push('/game/impact', {
                            decision,
                        });
                    }}
                    label={'Next'}
                />
            </motion.div>
        </div>
    );
};
