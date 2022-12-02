import React from "react";
import {Route, Routes} from 'react-router-dom';
import {SplashScreen} from '../views/SplashScreen/index.js';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
        </Routes>
    );
};
