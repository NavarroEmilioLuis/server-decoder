/*
  Deletes the game and its timer from the global objects.
  Mutates both objects.

  GAMES: object {}
  TIMERS: object {}
  userId: string
*/
export function removeGameFromMemory(GAMES, TIMERS, userId) {
  console.log('running function at', Date.now());
  delete GAMES[userId];
  delete TIMERS[userId];
}
