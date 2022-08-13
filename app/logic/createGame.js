/*
  Creates a new game object and returns it.

  userId: string
  config: object {}
  code: array<string>

  Return value: object {}
*/
export function createGame(userId, config, code) {
  return {
    userId,
    config: {
      ...config,
      colors: [...config.colors],
    },
    state: {
      code: [...code],
      currentAttempt: 0,
      attempts: [],
      result: null,
    },
  };
}
