import React from 'react';
import './index.scss';
import InactiveCheckmark from '../../assets/images/checkmark-inactive.svg';
import ActiveCheckmark from '../../assets/images/checkmark-active.svg';
import {motion} from 'framer-motion';

export const SolutionAccordion = ({
    icon,
    readMoreContent = {},
    label,
    isExpanded,
    isSelected,
    id,
    onToggleExpand,
    onToggleSelect,
}) => {
    return (
        <motion.div
            whileTap={{
                scale: 1.05,
            }}
            onClick={() => onToggleSelect(id)}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                height: isExpanded ? 195 : 80,
                transition: {duration: 0.35},
            }}
            exit={{
                height: 'auto',
            }}
            className={`solution-row ${isSelected ? 'active' : ''}`}
        >
            <div className={'solution-row-content'}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={icon} />
                    <div style={{marginLeft: 8}}>
                        <p className={'label'}>{label}</p>
                        <p
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleExpand(id);
                            }}
                            className={'read-more'}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </p>
                    </div>
                </div>
                <img src={isSelected ? ActiveCheckmark : InactiveCheckmark} />
            </div>
            {isExpanded && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {duration: 0.35, delay: 0.1},
                    }}
                    className={'expanded-content'}
                >
                    <div className="separator" />
                    <p className={'comment'}>{readMoreContent.comment}</p>
                    <div className={'user-detail'}>
                        <img src={readMoreContent.profilePicture} />
                        <span className={'name'}>{readMoreContent.name}</span>
                        <span className={'detail'}>
                            {readMoreContent.detail}
                        </span>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};
