/*
  Takes an existing game and returns the result by checking
  the state of the game and how many position matches the new code has.

  Note that the current attempt hasn't been updated when the result
  is being checked. Because of this, it needs to be offset by +1.

  game: object {}
  positionMatches: number

  Return value: number (0, 1) || null
*/
export function getGameResult(game, positionMatches) {
  if (game.config.size === positionMatches) return 1;
  else if (game.state.currentAttempt + 1 === game.config.attempts) return 0;
  return null;
}
