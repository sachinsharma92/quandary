import React, {useEffect} from 'react';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';
import {SplashScreen} from 'views/SplashScreen';
import {AnimatePresence} from 'framer-motion';
import {GC} from 'services/gameCenterService';
import {GameRoutesScreen} from 'views/GameRoutesScreen/index.js';
import {storage} from '../services/storage/index.js';
import {NEW_DATA_EVENT, TIMER_SECONDS} from '../utils/constants/index.js';

export const AppRouter = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        GC.sendGameLoadMessage();
        window.addEventListener('message', GC.messageEventHandler);
        window.addEventListener('unload', updateTimerBeforeRefresh);
        window.addEventListener(NEW_DATA_EVENT, decideRouteFlow);
        return () => {
            window.removeEventListener('message', GC.messageEventHandler);
            window.removeEventListener('unload', updateTimerBeforeRefresh);
            window.removeEventListener(NEW_DATA_EVENT, decideRouteFlow);
        };
    }, []);
    const decideRouteFlow = () => {
        let gameData = storage.get.gameData();
        if (!!gameData?.lastRoute) {
            history.replace(gameData?.lastRoute, {
                gameData,
                choices: [gameData.userChoice1, gameData.userChoice2],
                selectedOptionsKey: gameData.selectedOptionsKey,
            });
        }
    };

    const updateTimerBeforeRefresh = () => {
        let el = document.querySelector('.timer');
        let time = el?.getAttribute('data-value');
        let data = storage.get.gameData();
        if (data) {
            data.timeTaken = TIMER_SECONDS - time;
            storage.set.gameData(data);
            GC.sendGameDataSaveMessage(data);
        }
    };

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
