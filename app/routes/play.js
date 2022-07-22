import express from 'express';
import { GAME_TYPES_VALUES, GAME_TYPES_STRING } from '../constants/index.js';
import { getGameConfig } from '../logic/getGameConfig.js';
import { isValidConfig } from '../logic/isValidConfig.js';
import { getCode } from '../logic/getCode.js';
import { createGame } from '../logic/createGame.js';

/*
  All active games will be stored as an object in memory. They will be
  stored in a key that matches the user ID, as a user can only have
  one open game at a time.
*/
const GAMES = {};
const TEST_USER_ID = 'test';

export const play = express.Router();

play.get('/', (req, res) => {
  const { type, ...query } = req.query;

  if (GAME_TYPES_VALUES.includes(type) === false) {
    throw new Error(
      `Invalid game type, please select a valid game type: ${GAME_TYPES_STRING}`
    );
  }

  const gameConfig = getGameConfig(type, query);
  if (isValidConfig(gameConfig) === false) {
    throw new Error(`Invalid config: ${JSON.stringify(gameConfig)}`);
  }

  const gameCode = getCode(gameConfig);
  const userId = TEST_USER_ID;
  const game = createGame(userId, gameConfig, gameCode);

  GAMES[userId] = game;
  res.send(game);
});
