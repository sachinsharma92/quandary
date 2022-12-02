import React from 'react';
import './index.scss';
import MiniChar1 from '../../assets/images/mini-char1.png';
import MiniChar2 from '../../assets/images/mini-char2.png';
import MiniChar3 from '../../assets/images/mini-char3.png';
import MiniChar4 from '../../assets/images/mini-char4.png';
import Farmer from '../../assets/images/farmer.png';
import {Button} from '../../components/Button';
import {Dialog} from '../../components/Dialog/index.js';

const MINI_CHARACTERS = [
    MiniChar1,
    MiniChar2,
    MiniChar3,
    MiniChar4,
    MiniChar2,
    MiniChar1,
];

export const IntroScreen = () => {
    return (
        <div className={'intro-screen'}>
            <div className="background-layer" />
            <div className="background-layer-2" />
            <div className={'heading'}>
                <p>
                    Before making your decison, listen to the views of the
                    villagers and sort them as facts, opinions or ideas.
                </p>
            </div>

            <div className={'footer'}>
                <div className={'mini-chars'}>
                    {MINI_CHARACTERS.map((imgSrc, index) => (
                        <img src={imgSrc} style={{marginLeft: -10}} />
                    ))}
                </div>
                <p>
                    These 6 villagers have something to say to you. Go ahead to
                    read their viewpoints.
                </p>
                <Button label={'Next'} />
            </div>
        </div>
    );
};
