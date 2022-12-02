import React from 'react';
import RightChevron from '../../assets/images/right-chevron.svg';
import './index.scss';

export const Button = ({label, onClick}) => {
    return (
        <button onClick={onClick} className={'primary-button'}>
            {label}
            <img src={RightChevron} />
        </button>
    );
};
