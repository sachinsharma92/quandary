import React from 'react';
import DialogPointer from '../../assets/images/dialog-pointer.png';
import './index.scss';

export const Dialog = ({text = ''}) => {
    return (
        <div className={'dialog-box'}>
            <p>{text}</p>
            <img src={DialogPointer} className={'pointer'} />
        </div>
    );
};
