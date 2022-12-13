const AUTH_TOKEN_KEY = 'auth_token';
const GAME_KEY = import.meta.env.VITE_GAME_NAME;
const GAMEPLAY_ID = 'gameplay_id';
const GAME_DATA_KEY = 'game_data';
const TIME_REMAINING = 'time_remaining';

const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const getItem = (key) => JSON.parse(localStorage.getItem(key));

const removeItem = (key) => localStorage.removeItem(key);

const set = {
    authToken: (token) => setItem(AUTH_TOKEN_KEY, token),
    gameplayId: (id) => setItem(GAMEPLAY_ID, id),
    gameId: (id) => setItem(GAME_KEY, id),
    gameData: (data) => setItem(GAME_DATA_KEY, data),
    timeRemaining: (time) => setItem(TIME_REMAINING, time),
};

const get = {
    authToken: () => getItem(AUTH_TOKEN_KEY),
    gameplayId: () => getItem(GAMEPLAY_ID),
    gameId: () => getItem(GAME_KEY),
    gameData: () => getItem(GAME_DATA_KEY),
    timeRemaining: () => getItem(TIME_REMAINING),
};

const destroy = {
    all: () => localStorage.clear(),
    authToken: () => removeItem(AUTH_TOKEN_KEY),
    gameplayId: () => removeItem(GAMEPLAY_ID),
    gameId: () => removeItem(AUTH_TOKEN_KEY),
    gameData: () => removeItem(GAME_DATA_KEY),
};

export const storage = {
    set,
    get,
    destroy,
};
