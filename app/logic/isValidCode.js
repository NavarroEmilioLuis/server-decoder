/*
  Validates that all colors in the code
  part of the current game

  game: object {}
  code: array<string>

  Return value: boolean
*/
export function isValidCode(game, code) {
  return code.every((color) => game.config.colors.includes(color));
}
