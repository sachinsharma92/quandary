import React from 'react';
import RightChevron from '../../assets/images/right-chevron.svg';
import './index.scss';
import {motion} from 'framer-motion';

export const Button = ({label, onClick}) => {
    return (
        <motion.button
            whileTap={{
                scale: 1.12,
            }}
            onClick={onClick}
            className={'primary-button'}
        >
            {label}
            <img src={RightChevron} />
        </motion.button>
    );
};
