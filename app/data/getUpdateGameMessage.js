/* eslint-disable prettier/prettier */
import { arrayToString } from './arrayToString.js';

// Returns a string with a message when updating a game
export function getUpdateGameMessage(colorMatches, positionMatches, game) {
  if (game.state.result === 1) {
    return `You won! Cracked the code in ${game.state.currentAttempt} attempts.`;
  }

  if (game.state.result === 0) {
    return `You lose! Code was: ${arrayToString(game.state.code)}`;
  }

  return `You matched ${colorMatches} colors and ${positionMatches} positions.`;
}
