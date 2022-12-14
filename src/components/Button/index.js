import React from 'react';
import RightChevron from 'assets/images/right-chevron.svg';
import './index.scss';
import {motion} from 'framer-motion';

export const Button = ({
    label,
    onClick,
    disabled,
    className = '',
    showArrow = true,
    ...props
}) => {
    return (
        <motion.button
            whileTap={{
                scale: disabled ? 1 : 1.12,
            }}
            disabled={disabled}
            onClick={onClick}
            {...props}
            className={`primary-button ${className}`}
        >
            {label}
            {showArrow && <img src={RightChevron} />}
        </motion.button>
    );
};
