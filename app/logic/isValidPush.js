/*
  Validates that the game isn't over and the
  requesting user is the owner of the game.

  game: object {}
  userId: string

  Return value: boolean
*/
export function isValidPush(game, userId) {
  if (game.state.result !== null) return false;
  return game.userId === userId;
}
