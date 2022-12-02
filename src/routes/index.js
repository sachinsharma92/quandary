import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {SplashScreen} from '../views/SplashScreen/index.js';
import {IntroScreen} from '../views/IntroScreen';
import {AnimatePresence} from 'framer-motion';
import {QuestionScreen} from "../views/QuestionScreen/index.js";

export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route exact path="/" component={SplashScreen} />
                <Route path="/intro" component={IntroScreen} />
                <Route path="/questions" component={QuestionScreen} />
            </Switch>
        </AnimatePresence>
    );
};
