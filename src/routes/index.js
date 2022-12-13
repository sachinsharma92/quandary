import React, {useEffect} from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import {SplashScreen} from 'views/SplashScreen';
import {AnimatePresence} from 'framer-motion';
import {GC} from 'services/gameCenterService';
import {GameRoutesScreen} from 'views/GameRoutesScreen/index.js';

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
            <Switch location={location}>
                <Route path={'/game'} component={GameRoutesScreen} />
                <Route exact path="/welcome" component={SplashScreen} />
                <Route path={'/'}>
                    <Redirect to={'/welcome'} />
                </Route>
            </Switch>
        </AnimatePresence>
    );
};
