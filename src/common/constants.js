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
export const NO_VALUE = freeze(null);

export const DATE_FORMAT = 'DD MMM YYYY';
export const STATS_DATE_FORMAT = 'MMMM YYYY';

export const NAVIGATION = {
  HOME: 'Home',
  PAYMENT: 'Payment',
  STATISTICS: 'Statistics',
};

export const NAV_HEIGHT = '60px';

export const TOAST = {
  success: {
    type: 'success',
  },
  error: {
    type: 'error',
  },
  info: {
    type: 'info',
  },
};
