import React from 'react';
import DialogPointer from '../../assets/images/dialog-pointer.png';
import './index.scss';

export const Dialog = ({ text = '' }) => {
    return (
        <div className={'dialog-box'}>
            <p>{text}</p>
        </div>
    );
};
