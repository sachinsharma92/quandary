import React, {useCallback, useState} from 'react';
import './index.scss';
import {Button} from '../../components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {ANIMATION, IMPACTS} from '../../utils/constants';
import {useHistory} from 'react-router-dom';
import {Solution} from './components/Solution/index.js';

export const ImpactSolutionScreen = () => {
    const history = useHistory();
    const {decision = ''} = history.location.state || {};
    const [solution, setSolution] = useState(null);

    const onSelectSolution = useCallback((value) => {
        setSolution(value);
    }, []);

    return (
        <div className={'impact-solution-screen'}>
            <div className="background-layer-2" />
            <div style={{zIndex: 0}}>
                <motion.div {...ANIMATION.REVEAL} className={'heading'}>
                    <p>What would you do now?</p>
                    <p>Select any one option</p>
                </motion.div>
                <div className="contents">
                    {IMPACTS[decision]?.extendedSuggestions.map(
                        (item, index) => (
                            <Solution
                                itemIndex={index}
                                isSelected={solution === item.id}
                                onSelectSolution={onSelectSolution}
                                id={item.id}
                                key={item.id}
                                text={item.text}
                            />
                        ),
                    )}
                </div>
            </div>
            <AnimatePresence>
                {solution && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className={'footer'}
                    >
                        <Button
                            onClick={() => {
                                history.push('/thank-you');
                            }}
                            label={'Next'}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
