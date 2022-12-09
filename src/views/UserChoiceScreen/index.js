import React, {useCallback, useState} from 'react';
import './index.scss';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, SOLUTIONS} from 'utils/constants/index.js';
import {SolutionAccordion} from 'components/SolutionAccordion';
import {Button} from 'components/Button';
import {useHistory} from 'react-router-dom';

export const UserChoiceScreen = () => {
    const history = useHistory();
    const [expandedSolutionId, setExpandedSolutionId] = useState(null);
    const [isSelected, setIsSelected] = useState([]);

    const onToggleExpand = useCallback((id) => {
        setExpandedSolutionId((prev) => (prev === id ? null : id));
    }, []);

    const onToggleSelect = useCallback(
        (id) => {
            let updatedState = [...isSelected];
            const index = updatedState.findIndex((item) => item === id);
            if (index > -1) {
                updatedState.splice(index, 1);
            } else {
                if (updatedState?.length < 2) updatedState.push(id);
            }
            setIsSelected(updatedState);
        },
        [isSelected],
    );

    return (
        <motion.div
            {...ANIMATION.ENTRY_ANIMATION}
            className={'user-choice-container'}
        >
            <div className="background-layer" />
            <div style={{zIndex: 0}}>
                <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                    <p>
                        The villagers have suggested 3 possible solutions to fix
                        this problem. Please select any 2 out of the 3 to
                        investigate further
                    </p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: '5vh',
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0,
                        transition: {
                            delay: 0.8,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className={'heading'}
                >
                    <p>Select any 2 options</p>
                </motion.div>
                <motion.div className={'solutions'}>
                    {SOLUTIONS.map((item) => (
                        <SolutionAccordion
                            key={item.id}
                            id={item.id}
                            onToggleSelect={onToggleSelect}
                            onToggleExpand={onToggleExpand}
                            isExpanded={expandedSolutionId === item.id}
                            isSelected={isSelected.includes(item.id)}
                            label={item.label}
                            icon={item.icon}
                            readMoreContent={item.readMoreContent}
                        />
                    ))}
                </motion.div>
            </div>
            <AnimatePresence>
                {isSelected?.length === 2 && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {duration: 0.3},
                        }}
                        exit={{opacity: 0}}
                        style={{alignSelf: 'flex-end'}}
                    >
                        <Button
                            onClick={() =>
                                history.push('/user-choice-preview', {
                                    choices: isSelected,
                                })
                            }
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
