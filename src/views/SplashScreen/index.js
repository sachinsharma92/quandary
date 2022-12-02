import React from 'react';
import './index.scss';
import MiniChar1 from '../../assets/images/mini-char1.png';
import MiniChar2 from '../../assets/images/mini-char2.png';
import MiniChar3 from '../../assets/images/mini-char3.png';
import MiniChar4 from '../../assets/images/mini-char4.png';
import Farmer from '../../assets/images/farmer.png';
import {Button} from '../../components/Button';
import {Dialog} from '../../components/Dialog/index.js';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ANIMATION} from '../../utils/constants/index.js';

const MINI_CHARACTERS = [MiniChar1, MiniChar2, MiniChar3, MiniChar4];
const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {duration: 1, delay: 0.1},
    },
    exit: {
        // x: '-100vw',
        transition: {ease: 'easeInOut'},
    },
};
export const SplashScreen = () => {
    const history = useHistory();
    return (
        <motion.div {...ANIMATION.ENTRY_ANIMATION} className={'splash-screen'}>
            <div className="background-layer" />
            <motion.div {...ANIMATION.SLIDE_OUT_LEFT} className={'heading'}>
                <p>
                    Three weeks ago, a few sheep started disappearing from our
                    village.
                </p>
            </motion.div>
            <div className={'content'}>
                <div className={'dialog-container'}>
                    <Dialog
                        text={'It seems like some foxes are hunting the sheep.'}
                    />
                </div>
                <img className={'character'} src={Farmer} />
            </div>
            <motion.div {...ANIMATION.SLIDE_OUT_LEFT} className={'footer'}>
                <div className={'mini-chars'}>
                    {MINI_CHARACTERS.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            style={{marginLeft: -10}}
                        />
                    ))}
                </div>
                <p>The villagers need your help in solving this problem.</p>
                <Button onClick={() => history.push('/intro')} label={'Next'} />
            </motion.div>
        </motion.div>
    );
};
