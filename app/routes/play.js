import express from 'express';
import { GAME_TYPES_VALUES, GAME_TYPES_STRING } from '../constants/index.js';
import { getGameConfig } from '../logic/getGameConfig.js';
import { isValidConfig } from '../logic/isValidConfig.js';
import { getCode } from '../logic/getCode.js';
import { createGame } from '../logic/createGame.js';
import { isValidCode } from '../logic/isValidCode.js';
import { isValidPush } from '../logic/isValidPush.js';
import { compareCodes } from '../logic/compareCodes.js';
import { getGameResult } from '../logic/getGameResult.js';
import { updateGame } from '../logic/updateGame.js';
import { arrayToString } from '../data/arrayToString.js';
import { getCreateGameMessage } from '../data/getCreateGameMessage.js';
import { getUpdateGameMessage } from '../data/getUpdateGameMessage.js';
import { removeGameFromMemory } from '../data/removeGameFromMemory.js';

/*
  All active games will be stored as an object in memory. They will be
  stored in a key that matches the user ID, as a user can only have
  one open game at a time.
*/
const GAMES = {};
const TIMERS = {};
const MAX_GAME_DURATION = 3 * 60 * 60 * 1000; // 3 Hours
const TEST_USER_ID = 'test';

export const play = express.Router();

play.get('/', (req, res) => {
  const { type, ...query } = req.query;

  // Make sure game type exists
  if (GAME_TYPES_VALUES.includes(type) === false) {
    throw new Error(
      `Invalid game type, please select a valid game type: ${GAME_TYPES_STRING}`
    );
  }

  // Validate the game is playable
  const gameConfig = getGameConfig(type, query);
  if (isValidConfig(gameConfig) === false) {
    throw new Error(`Invalid config: ${JSON.stringify(gameConfig)}`);
  }

  // Remove previous game if it exists
  const userId = TEST_USER_ID;
  const previousGame = GAMES[userId];
  if (previousGame !== undefined) {
    clearTimeout(TIMERS[userId]);
    removeGameFromMemory(GAMES, TIMERS, userId);
  }

  // Create new game
  const gameCode = getCode(gameConfig);
  const game = createGame(userId, gameConfig, gameCode);

  // Set deletion timer to the game
  TIMERS[userId] = setTimeout(
    removeGameFromMemory,
    MAX_GAME_DURATION,
    GAMES,
    TIMERS,
    userId
  );

  // Save the game and send config back to the user
  GAMES[userId] = game;
  const responseMessage = getCreateGameMessage(game);
  res.send(responseMessage);
});

play.post('/', (req, res) => {
  const { code } = req.body;

  const userId = TEST_USER_ID;
  const game = GAMES[userId];

  // Make sure the user has a current game
  if (!game) {
    throw new Error(`No game is currently being played!`);
  }

  // Validate user input
  if (!code || Array.isArray(code) === false) {
    throw new Error(`Code needs to be an array, received: ${code}`);
  }

  if (isValidCode(game, code) === false) {
    throw new Error(
      // eslint-disable-next-line prettier/prettier
      `Invalid code: ${arrayToString(code)}. You should only include colors: ${arrayToString(game.config.colors)}`
    );
  }

  if (isValidPush(game, userId) === false) {
    throw new Error(`You're not allowed to keep playing this game.`);
  }

  // Compare codes and update game
  const { colorMatches, positionMatches } = compareCodes(game.state.code, code);
  const result = getGameResult(game, positionMatches);
  const updatedGame = updateGame(game, code, result);

  // Remove game and timer if it's over, otherwise update it
  if (result !== null) {
    clearTimeout(TIMERS[userId]);
    removeGameFromMemory(GAMES, TIMERS, userId);
  } else {
    GAMES[userId] = updatedGame;
  }

  // Send back user message
  const responseMessage = getUpdateGameMessage(
    colorMatches,
    positionMatches,
    updatedGame
  );
  res.send(responseMessage);
});
