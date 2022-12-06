import React from 'react';
import './index.scss';
import PictureColl from '../../assets/images/picture_coll.png';
import {Button} from '../../components/Button';
import {motion} from 'framer-motion';
import {ANIMATION} from '../../utils/constants/index.js';
import {useHistory} from 'react-router-dom';

export const IntroScreen = () => {
    const history = useHistory();
    return (
        <motion.div {...ANIMATION.ENTRY_ANIMATION} className={'intro-screen'}>
            <div className="background-layer-2" />
            <motion.div {...ANIMATION.SLIDE_IN_LEFT} className={'heading'}>
                <p>
                    Before making your decison, listen to the views of these 6
                    villagers and sort them as:
                </p>
                <p>Facts | Opinions | Ideas</p>
            </motion.div>
            <div className={'content'}>
                <motion.img
                    initial={{
                        opacity: 0,
                    }}
                    animate={{opacity: 1, transition: {duration: 1}}}
                    exit={{opacity: 0}}
                    src={PictureColl}
                />
            </div>
            <motion.div {...ANIMATION.SLIDE_IN_LEFT} className={'footer'}>
                <p>Tap on next to read their viewpoints.</p>
                <Button
                    onClick={() => {
                        history.push('/questions');
                    }}
                    label={'Next'}
                />
            </motion.div>
        </motion.div>
    );
};
