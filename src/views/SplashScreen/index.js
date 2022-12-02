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

const MINI_CHARACTERS = [MiniChar1, MiniChar2, MiniChar3, MiniChar4];

export const SplashScreen = () => {
    const history = useHistory();
    return (
        <div className={'splash-screen'}>
            <div className="background-layer" />
            <div className={'heading'}>
                <p>
                    Three weeks ago, a few sheep started disappearing from our
                    village.
                </p>
            </div>
            <div className={'content'}>
                <div className={'dialog-container'}>
                    <Dialog
                        text={'It seems like some foxes are hunting the sheep.'}
                    />
                </div>
                <img src={Farmer} />
            </div>
            <div className={'footer'}>
                <div className={'mini-chars'}>
                    {MINI_CHARACTERS.map((imgSrc, index) => (
                        <img src={imgSrc} style={{marginLeft: -10}} />
                    ))}
                </div>
                <p>The villagers need your help in solving this problem.</p>
                <Button onClick={()=>history.push('/intro')} label={'Next'} />
            </div>
        </div>
    );
};
