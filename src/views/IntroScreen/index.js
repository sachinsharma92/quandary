import React from 'react';
import './index.scss';
import PictureColl from 'assets/images/picture_coll.png';
import {Button} from 'components/Button';
import {motion} from 'framer-motion';
import {ANIMATION} from 'utils/constants/index.js';
import {useHistory} from 'react-router-dom';

export const IntroScreen = () => {
    const history = useHistory();
    return (
        <motion.div {...ANIMATION.ENTRY_ANIMATION} className={'intro-screen'}>
            <div className="background-layer-2" />
            <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                <p>
                    Before making your decison, listen to the views of these 6
                    villagers and sort them as:
                </p>
                <p>Facts | Opinions | Ideas</p>
            </motion.div>
            <div className={'content'}>
                <motion.img
                    style={{scale: 1.13}}
                    initial={{
                        opacity: 0,
                        translateX: '100vh',
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {delay: 0.6, duration: 1},
                    }}
                    exit={{opacity: 0}}
                    src={PictureColl}
                />
            </div>
            <motion.div
                initial={{
                    translateY: '30vh',
                }}
                animate={{
                    translateY: 0,
                    transition: {
                        delay: 1.5,
                        type: 'spring',
                        stiffness: 50,
                    },
                }}
                className={'footer'}
            >
                <p>Tap on next to read their viewpoints.</p>
                <Button
                    onClick={() => {
                        history.push('/game/questions');
                    }}
                    label={'Next'}
                />
            </motion.div>
        </motion.div>
    );
};
