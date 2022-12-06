import React from 'react';
import './index.scss';
import MiniChar1 from '../../assets/images/mini-char1.png';
import MiniChar2 from '../../assets/images/mini-char2.png';
import MiniChar3 from '../../assets/images/mini-char3.png';
import MiniChar4 from '../../assets/images/mini-char4.png';
import PictureColl from '../../assets/images/picture_coll.png';
import {Button} from '../../components/Button';
import {motion} from 'framer-motion';
import {ANIMATION} from '../../utils/constants/index.js';
import {useHistory} from 'react-router-dom';

const MINI_CHARACTERS = [
    MiniChar1,
    MiniChar2,
    MiniChar3,
    MiniChar4,
    MiniChar2,
    MiniChar1,
];
const EXAMPLES = [
    {
        trait: 'Fact',
        example: 'Example: Foxes can run very fast.',
    },
    {
        trait: 'Opinion',
        example: 'Example: I really hate foxes.',
    },
    {
        trait: 'Idea',
        example: 'Example: We should build a trap.',
    },
];
export const IntroScreen = () => {
    const history = useHistory();
    return (
        <motion.div {...ANIMATION.ENTRY_ANIMATION} className={'intro-screen'}>
            {/*<div className="background-layer" />*/}
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
