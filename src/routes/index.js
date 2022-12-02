import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {SplashScreen} from '../views/SplashScreen/index.js';
import {IntroScreen} from '../views/IntroScreen';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={SplashScreen} />
            <Route path="/intro" component={IntroScreen} />
        </Switch>
    );
};
