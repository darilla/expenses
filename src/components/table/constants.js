import moment from 'moment';
import { EMPTY_ARRAY, EMPTY_STRING, NO_VALUE } from '../../common/constants';

export const NO_DATA_PLACEHOLDER = '-';
export const TAG = {
  shopping: {
    color: 'volcano',
    name: 'shopping',
  },
  cats: {
    color: 'geekblue',
    name: 'cats',
  },
  'self-gift': {
    color: 'cyan',
    name: 'self-gift',
  },
  credit: {
    color: 'magenta',
    name: 'credit',
  },
  gifts: {
    color: 'blue',
    name: 'gifts',
  },
};

export const TAGS = Object.keys(TAG).map(key => ({
  text: TAG[key].name,
  value: TAG[key].name,
}));

export const RECORD_DEFAULT_FIELDS = {
  costs: EMPTY_STRING,
  date: moment(),
  name: EMPTY_STRING,
  note: EMPTY_STRING,
  tags: EMPTY_ARRAY,
};

export const TABLE_I18N = {
  ADD_ROW_BTN: 'Add a row',
  SAVE_BTN: 'Save',
  CANCEL_BTN: 'Cancel',
  DELETE_BTN: 'Delete',
  EDIT_BTN: 'Edit',
};
