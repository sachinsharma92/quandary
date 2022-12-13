import {Route} from 'react-router-dom';
import {Timer} from '../../components/Timer';
import {IntroScreen} from '../IntroScreen';
import {QuestionScreen} from '../QuestionScreen';
import {UserChoiceScreen} from '../UserChoiceScreen';
import {UserChoicePreviewScreen} from '../UserChoicePreviewScrreen';
import {OpinionScreen} from '../OpinionScreen';
import {DecisionScreen} from '../DecisionScreen';
import {DecisionPreview} from '../DecisionPreview';
import {ImpactScreen} from '../ImpactScreen';
import {ImpactSolutionScreen} from '../ImpactSolutionScreen';
import {ThankyouScreen} from '../ThankyouScreen';
import React from 'react';
import {useTimer} from '../../hooks/useTimer.js';
import {TimeExpired} from '../TimeExpired';

export const GameRoutesScreen = () => {
    const [time] = useTimer();
    return time !== 0 ? (
        <>
            <Timer time={time} />
            <Route exact path="/game/intro" component={IntroScreen} />
            <Route exact path="/game/questions" component={QuestionScreen} />
            <Route path="/game/user-choice" component={UserChoiceScreen} />
            <Route
                path="/game/user-choice-preview"
                component={UserChoicePreviewScreen}
            />
            <Route path="/game/opinions" component={OpinionScreen} />
            <Route path="/game/final-decision" component={DecisionScreen} />
            <Route path="/game/decision-preview" component={DecisionPreview} />
            <Route path="/game/impact" component={ImpactScreen} />
            <Route
                path="/game/impact-solutions"
                component={ImpactSolutionScreen}
            />
            <Route path="/game/thank-you" component={ThankyouScreen} />
        </>
    ) : (
        <TimeExpired />
    );
};
