/*
  Takes an existing game and returns the result by checking
  the state of the game and how many position matches the new code has.

  game: object {}
  positionMatches: number

  Return value: number (0, 1) || null
*/
export function getGameResult(game, positionMatches) {
  if (game.config.size === positionMatches) return 1;
  else if (game.state.currentAttempt === game.config.attempts) return 0;
  return null;
}
