import React, {useCallback, useState} from 'react';
import './index.scss';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, SOLUTIONS} from '../../utils/constants/index.js';
import {SolutionAccordion} from '../../components/SolutionAccordion';
import {Button} from '../../components/Button';

export const UserChoiceScreen = () => {
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
                <motion.div {...ANIMATION.SLIDE_OUT_LEFT} className={'heading'}>
                    <p>
                        The villagers have suggested 3 possible solutions to fix
                        this problem. Please select any 2 out of the 3 to
                        investigate further
                    </p>
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
                        <Button label={'Next'} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
