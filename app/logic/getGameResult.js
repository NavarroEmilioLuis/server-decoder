/*
  Takes an existing game and returns the result by checking
  the state of the game with the new code attempt.

  game: object {}
  code: array<string>

  Return value: number (0, 1) || null
*/
export function updateGame(game, code) {
  if (game.state.code === code) return 1;
  else if (game.state.currentAttempt === game.config.maxAttempts) return 0;
  return null;
}
