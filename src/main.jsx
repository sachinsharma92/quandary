import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/theme.scss';
import { BrowserRouter } from 'react-router-dom';
import { storage } from 'services/storage/index.js';

// reset the local storage on startup
storage.destroy.all();

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
