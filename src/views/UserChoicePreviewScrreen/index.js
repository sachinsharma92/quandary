import React, {useEffect, useMemo} from 'react';
import './index.scss';
import {Button} from 'components/Button';
import {motion} from 'framer-motion';
import {ANIMATION, SOLUTIONS, TIMER_SECONDS} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';
import {storage} from '../../services/storage/index.js';
import {GC} from '../../services/gameCenterService/index.js';

export const UserChoicePreviewScreen = () => {
    const history = useHistory();
    let {choices = [], gameData} = history.location.state || {};
    console.log(gameData, choices);

    useEffect(() => {
        //resume game level
        if (
            !!gameData?.lastRoute &&
            !!gameData?.userChoice1 &&
            !!gameData?.userChoice2
        ) {
            choices = [gameData.userChoice1, gameData.userChoice2];
        }
    }, [gameData]);

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
                        let time = document
                            .querySelector('.timer')
                            ?.getAttribute('data-value');
                        let existingGameData = storage.get.gameData();
                        let gameData = {
                            ...existingGameData,
                            timeTaken: TIMER_SECONDS - time,
                            lastRoute: window.location.pathname,
                            selectedOptionsKey,
                        };
                        storage.set.gameData(gameData);
                        GC.sendGameDataSaveMessage(gameData);
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
