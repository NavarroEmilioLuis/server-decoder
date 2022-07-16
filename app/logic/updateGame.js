/*
  Takes an existing game and updates its state,
  returning a brand new object with the updates.

  game: object {}
  code: array<string>
  result: number (0, 1) || null

  Return value: object {}
*/
export function updateGame(game, code, result) {
  return {
    userId: game.userId,
    config: {
      ...game.config,
    },
    state: {
      code: [...game.state.code],
      currentAttempt: game.state.currentAttempt + 1,
      attempts: [...game.state.attempts, code],
      result,
    },
  };
}
