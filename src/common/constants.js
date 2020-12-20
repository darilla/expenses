const { freeze } = Object;

// App
export const APP_MODE = freeze({
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
});

export const APP_LOCALE = freeze({
  DE: 'de',
  EN: 'en',
});

// Values
export const EMPTY_STRING = '';
export const EMPTY_ARRAY = freeze([]);
export const EMPTY_OBJECT = freeze({});