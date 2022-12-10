import React, { useCallback, useState } from 'react';
import './index.scss';
import { Button } from 'components/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { ANIMATION, FINAL_DECISIONS } from 'utils/constants/index.js';
import { useHistory } from 'react-router-dom';
import { Decision } from './components/Decision';

export const DecisionScreen = () => {
    const history = useHistory();
    const { selectedOptionsKey = '' } = history.location.state || {};

    const [decision, setDecision] = useState(null);

    const onSelectDecision = useCallback((value) => {
        setDecision(value);
    }, []);

    return (
        <div className={'decision-screen'}>
            <div style={{ zIndex: 0 }}>
                <div className={'heading'}>
                    <motion.p {...ANIMATION.REVEAL}>
                        Now choose your final decision
                    </motion.p>
                </div>
                <div className="contents">
                    <motion.div
                        initial={{
                            opacity: 0,
                            translateY: '20vh',
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                            transition: {
                                delay: 0.57,
                                type: 'spring',
                                stiffness: 50,
                            },
                        }}
                        exit={{ opacity: 0 }}
                        className={'decisions'}
                    >
                        {FINAL_DECISIONS[selectedOptionsKey]?.map((item) => (
                            <Decision
                                onSelectOpinion={onSelectDecision}
                                selected={decision}
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {decision && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.3 },
                        }}
                        exit={{ opacity: 0 }}
                        style={{ alignSelf: 'flex-end' }}
                        className="btn-center"
                    >
                        <Button
                            onClick={() => {
                                history.push('/decision-preview', {
                                    decision,
                                });
                            }}
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
