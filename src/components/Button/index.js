import React from 'react';
import './index.scss';

export const Button = ({label, onClick}) => {
    return (
        <button onClick={onClick} className={'primary-button'}>
            {label}
        </button>
    );
};
