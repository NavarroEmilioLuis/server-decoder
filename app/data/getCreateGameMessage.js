/* eslint-disable prettier/prettier */
import { arrayToString } from './arrayToString.js';

// Returns a string with a message when creating a game
export function getCreateGameMessage(game) {
  let responseMessage = 'Starting game with properties:\n';
  responseMessage += `- Possible attempts: ${game.config.attempts}.\n`;
  responseMessage += `- Code size: ${game.config.size}.\n`;
  responseMessage += `- Possible colors: ${arrayToString(game.config.colors)}.\n`;
  responseMessage += `- Code can contain duplicated colors: ${game.config.duplicates ? 'Y' : 'N'}.\n`;
  responseMessage += `- Code can contain blanks: ${game.config.blanks ? 'Y' : 'N'}.\n`;

  return responseMessage;
}
