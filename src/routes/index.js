import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {SplashScreen} from '../views/SplashScreen/index.js';
import {IntroScreen} from '../views/IntroScreen';
import {AnimatePresence} from 'framer-motion';
import {QuestionScreen} from '../views/QuestionScreen/index.js';
import {UserChoiceScreen} from '../views/UserChoiceScreen/index.js';
import {UserChoicePreviewScreen} from '../views/UserChoicePreviewScrreen/index.js';
import {OpinionScreen} from '../views/OpinionScreen/index.js';
import {DecisionScreen} from '../views/DecisionScreen/index.js';
import {DecisionPreview} from '../views/DecisionPreview/index.js';
import {ImpactScreen} from '../views/ImpactScreen/index.js';
import {ImpactSolutionScreen} from '../views/ImpactSolutionScreen/index.js';
import {ThankyouScreen} from '../views/ThankyouScreen/index.js';

export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route exact path="/" component={SplashScreen} />
                <Route path="/intro" component={IntroScreen} />
                <Route path="/questions" component={QuestionScreen} />
                <Route path="/user-choice" component={UserChoiceScreen} />
                <Route
                    path="/user-choice-preview"
                    component={UserChoicePreviewScreen}
                />
                <Route path="/opinions" component={OpinionScreen} />
                <Route path="/final-decision" component={DecisionScreen} />
                <Route path="/decision-preview" component={DecisionPreview} />
                <Route path="/impact" component={ImpactScreen} />
                <Route
                    path="/impact-solutions"
                    component={ImpactSolutionScreen}
                />
                <Route path="/thank-you" component={ThankyouScreen} />
            </Switch>
        </AnimatePresence>
    );
};
