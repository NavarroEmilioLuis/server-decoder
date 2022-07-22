import { BLANK_TOKEN, GAME_TYPES, GAME_CONFIG } from '../constants/index.js';

// Converts a query param to a boolean. Even adding the param without
// a value will default to true. i.e. "?param"
function queryParamToBoolean(param) {
  return typeof param === 'string';
}

// Converts a query param to an integer (decimal).
function queryParamToInteger(param) {
  return parseInt(param, 10);
}

// Converts a query param to an array. The expected param
// is a comma-separated string.
function queryParamToArray(param) {
  // Ensure string type
  const stringParam = String(param);
  return stringParam.split(',');
}

/*
  Returns a game config depending on the selected game type.

  type: string
  query: object {}

  Return value: object {}
*/
export function getGameConfig(type, query) {
  if (type !== GAME_TYPES.CUSTOM) {
    return GAME_CONFIG[type];
  }

  // Parse all config params from the query, if they don't exist,
  // returns default (except booleans, which are assumed false)
  const { attempts, size, colors, duplicates, blanks } = query;
  const defaultConfig = GAME_CONFIG[GAME_TYPES.NORMAL];

  // Modify the colors array if the config allows blanks
  const hasBlanks = queryParamToBoolean(blanks);
  const finalColors = colors ? queryParamToArray(colors) : defaultConfig.colors;
  if (hasBlanks) {
    finalColors.push(BLANK_TOKEN);
  }

  return {
    attempts: attempts ? queryParamToInteger(attempts) : defaultConfig.attempts,
    size: size ? queryParamToInteger(size) : defaultConfig.size,
    colors: finalColors,
    duplicates: queryParamToBoolean(duplicates),
    blanks: hasBlanks,
  };
}
