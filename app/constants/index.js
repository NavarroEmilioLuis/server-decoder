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
export const GAME_TYPES_STRING = GAME_TYPES_VALUES.join(', ');
export const GAME_CONFIG = {
  [GAME_TYPES.NORMAL]: {
    attempts: 12,
    size: 4,
    colors: COLORS,
    duplicates: true,
    blanks: false,
  },
};
