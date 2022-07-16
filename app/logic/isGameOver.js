/*
  Checks the result of the game and determines if it's over.

  game: object {}

  Return value: boolean
*/
export function isGameOver(game) {
  return game.state.result !== null;
}
