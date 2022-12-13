import React from 'react';
import './index.scss';
import ActiveCheckmark from '../../../../assets/images/checkmark-active.svg';
import InactiveCheckmark from '../../../../assets/images/checkmark-inactive.svg';
import {motion} from 'framer-motion';

export const Solution = ({
    id,
    itemIndex,
    isSelected,
    text,
    onSelectSolution,
}) => {
    return (
        <motion.div
            whileTap={{
                scale: 1.04,
            }}
            initial={{
                opacity: 0,
                translateY: '10vh',
            }}
            animate={{
                opacity: 1,
                translateY: 0,
                transition: {
                    delay: 0.5 + itemIndex * 0.1,
                    type: 'spring',
                    stiffness: 50,
                },
            }}
            exit={{opacity: 0, translateY: '10vh'}}
            onClick={() => onSelectSolution(text)}
            className={`solution-selector ${isSelected ? 'active' : ''}`}
        >
            <p className={'title'}>Option #{id}</p>
            <div className={'solution-container'}>
                <p>{text}</p>
                <img src={isSelected ? ActiveCheckmark : InactiveCheckmark} />
            </div>
        </motion.div>
    );
};
