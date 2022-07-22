import { GAME_TYPES_VALUES, GAME_CONFIG } from './index.js';

export function validateConstants() {
  const possibleGameConfigKeys = Object.keys(GAME_CONFIG);

  // Explicitly check all keys from GAME_CONFIG are in GAME_TYPE_VALUES
  const missingKeys = possibleGameConfigKeys.filter(
    (key) => GAME_TYPES_VALUES.includes(key) === false
  );
  if (missingKeys.length !== 0) {
    throw new Error(`Missing keys on GAME_CONFIG: ${missingKeys}`);
  }
}
