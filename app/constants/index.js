import { arrayToString } from '../data/arrayToString.js';

const COLORS = [
  'blue',
  'green',
  'yellow',
  'red',
  'purple',
  'brown',
  'orange',
  'pink',
  'white',
  'black',
];
export const BLANK_TOKEN = '_';

// Configuration
export const GAME_TYPES = {
  NORMAL: 'normal',
  CUSTOM: 'custom',
};

export const GAME_TYPES_VALUES = Object.values(GAME_TYPES);
export const GAME_TYPES_STRING = arrayToString(GAME_TYPES_VALUES);
export const GAME_CONFIG = {
  [GAME_TYPES.NORMAL]: {
    attempts: 12,
    size: 4,
    colors: COLORS,
    duplicates: true,
    blanks: false,
  },
};
