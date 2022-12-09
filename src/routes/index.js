import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {SplashScreen} from 'views/SplashScreen';
import {IntroScreen} from 'views/IntroScreen';
import {AnimatePresence} from 'framer-motion';
import {QuestionScreen} from 'views/QuestionScreen';
import {UserChoiceScreen} from 'views/UserChoiceScreen';
import {UserChoicePreviewScreen} from 'views/UserChoicePreviewScrreen';
import {OpinionScreen} from 'views/OpinionScreen';
import {DecisionScreen} from 'views/DecisionScreen';
import {DecisionPreview} from 'views/DecisionPreview';
import {ImpactScreen} from 'views/ImpactScreen';
import {ImpactSolutionScreen} from 'views/ImpactSolutionScreen';
import {ThankyouScreen} from 'views/ThankyouScreen';
import {GC} from 'services/gameCenterService';

export const AppRouter = () => {
    const location = useLocation();

    useEffect(() => {
        GC.sendGameLoadMessage();
        window.addEventListener('message', GC.messageEventHandler);
        return () =>
            window.removeEventListener('message', GC.messageEventHandler);
    }, []);

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
