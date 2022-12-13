import {storage as configStorage} from '../storage';
import {NEW_DATA_EVENT, TIMER_SECONDS} from 'utils/constants';

const GAME_MOUNT = 'GAME_MOUNT';
const GAME_DATA_SET = 'GAME_DATA_SET';
const GAME_DATA_SAVE = 'GAME_DATA_SAVE';
const GAME_END = 'GAME_END';

/**
 * Get the parent app origin
 * @returns {string}
 */
const getParentOrigin = () => {
    const parentOrigin =
        window.location !== window.parent.location
            ? document.referrer
            : document.location.href;
    return parentOrigin.endsWith('/')
        ? parentOrigin.slice(0, -1)
        : parentOrigin;
};

/**
 * Event handler for catching postMessage events from parent app
 * @param {*} event
 * @returns
 */
const messageEventHandler = (event) => {
    // Ignore other message events which are not from assessment center origin
    if (event.origin !== getParentOrigin()) {
        return;
    }

    // Saving authToken & gameplayId from Assessment centre
    const {user, gameId, gameLevelData} = event.data;
    configStorage.set.gameId(gameId);
    configStorage.set.gameData(gameLevelData);
    configStorage.set.timeRemaining(
        gameLevelData?.totalTimeTaken === undefined
            ? TIMER_SECONDS
            : TIMER_SECONDS - gameLevelData?.totalTimeTaken > 0
            ? TIMER_SECONDS - gameLevelData?.totalTimeTaken
            : 0,
    );
    //custom storage event dispatch for resuming game
    window.dispatchEvent(new Event(NEW_DATA_EVENT));

    // sending start game event
    sendGameDataSetMessage();
};

/**
 * Send message to the parent app (Assessment centre)
 * @param {any} message message to be sent
 * @param {object} options optional params
 * @return
 */
const sendMessageToGamecenter = (message, options) => {
    const {addGameName} = options ?? {};

    const url = getParentOrigin();
    const data = addGameName
        ? {...message, game: process.env.VITE_GAME_NAME}
        : message;

    window.parent.postMessage(data, url);
};

/**
 * Event for game mount
 */
const sendGameLoadMessage = () => {
    const message = {status: GAME_MOUNT};
    sendMessageToGamecenter(message);
};

/**
 * Event to be sent when all game data has been set
 * and game can be played
 */
const sendGameDataSetMessage = () => {
    const message = {status: GAME_DATA_SET};
    sendMessageToGamecenter(message);
};

/**
 * Event for gameLevelData save, only data
 * is sent for this game.
 */
const sendGameDataSaveMessage = (gameLevelData) => {
    const message = {status: GAME_DATA_SAVE, gameLevelData};
    sendMessageToGamecenter(message);
};

/**
 * Event for game end, send gameId to parent app
 */
const sendGameEndMessage = () => {
    const message = {status: GAME_END, gameId: configStorage.get.gameId()};
    sendMessageToGamecenter(message);
};

export const GC = {
    messageEventHandler,
    sendGameLoadMessage,
    sendGameDataSaveMessage,
    sendGameEndMessage,
};
