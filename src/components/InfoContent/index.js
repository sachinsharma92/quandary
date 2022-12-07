import React from 'react';
import './index.scss';
import {Dialog} from '../Dialog/index.js';

export const InfoContent = () => {
    return (
        <div className={'info-content'}>
            <div className={'heading'}>
                <p>Here are some examples of</p>
                <p>Facts • Opinions • Ideas</p>
            </div>
            <div className={'example'}>
                <div className={'example-row'}>
                    <p className={'label'}>Fact:</p>
                    <Dialog text={'Foxes can run very fast.'} />
                </div>
                <div className={'example-row'}>
                    <p className={'label'}>Opinion:</p>
                    <Dialog text={'I really hate foxes.'} />
                </div>
                <div className={'example-row'}>
                    <p className={'label'}>Idea:</p>
                    <Dialog text={'We should build a trap.'} />
                </div>
            </div>
        </div>
    );
};
