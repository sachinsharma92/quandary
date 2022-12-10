import React from 'react';
import './index.scss';
import InactiveCheckmark from '../../assets/images/checkmark-inactive.svg';
import ActiveCheckmark from '../../assets/images/checkmark-active.svg';
import { motion } from 'framer-motion';

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
                scale: 1.04,
            }}
            onClick={() => onToggleSelect(id)}
            initial={{
                opacity: 0,
                translateY: '100vh',
            }}
            animate={[
                {
                    opacity: 1,
                    height: isExpanded ? 195 : 80,
                    transition: { duration: 0.35 },
                },
                {
                    translateY: 0,
                    transition: { delay: 0.8, type: 'spring', stiffness: 45 },
                },
            ]}
            exit={{
                height: 'auto',
            }}
            className={`solution-row ${isSelected ? 'active' : ''}`}
        >
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: isSelected ? 1 : 0,
                    transition: { duration: 0.3 },
                }}
                exit={{
                    opacity: 0,
                }}
                className={`active-layer ${isSelected ? 'active' : ''}`}
            />
            <div
                className={`solution-row-content ${isSelected ? 'active' : ''}`}
            >
                <div className="media-box">
                    <img src={icon} />
                    <div style={{ marginLeft: 8 }}>
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
                        transition: { duration: 0.35, delay: 0.1 },
                    }}
                    className={`expanded-content ${isSelected ? 'active' : ''}`}
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
