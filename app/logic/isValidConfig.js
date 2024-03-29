/*
  Validates if the config used to create a game
  is valid.

  attempts: int (1 to Infinity)
  size: int (1 to 16)
  colors: array<string>
  duplicates: boolean
  blanks: boolean

  Return value: boolean
*/
export function isValidConfig(config) {
  const { attempts, size, colors, duplicates, blanks } = config;
  // Early bail if conditions aren't met
  // Ensure duplicates and blanks are booleans
  if (typeof duplicates !== 'boolean' || typeof blanks !== 'boolean')
    return false;

  // Ensure attempts is a number from 1 to Infinity
  if (typeof attempts !== 'number' || attempts < 1) return false;

  // Ensure size is a number from 1 to 16
  if (!Number.isFinite(size) || size < 1 || size > 16) return false;

  // Ensure colors is an array with length ranging from 2 to 64
  if (!Array.isArray(colors) || colors.length < 2 || colors.length > 64)
    return false;

  // Ensure all colors are strings and that they don't repeat
  const includedColors = {};
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];

    if (typeof color !== 'string') return false;
    if (includedColors[color]) return false;

    includedColors[color] = true;
  }

  // All arguments are valid
  return true;
}
