import { EMPTY_ARRAY } from '../../common/constants';

export const NO_DATA_PLACEHOLDER = '-';
export const DEFAULT_NUMBER = 0;

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

export const ROW_DEFAULT_FIELDS = {
  costs: DEFAULT_NUMBER,
  date: NO_DATA_PLACEHOLDER,
  name: NO_DATA_PLACEHOLDER,
  note: NO_DATA_PLACEHOLDER,
  tags: EMPTY_ARRAY,
};

export const TABLE_I18N = {
  ADD_ROW_BTN: 'Add a row',
  SAVE_BTN: 'Save',
  CANCEL_BTN: 'Cancel',
  DELETE_BTN: 'Delete',
  EDIT_BTN: 'Edit',
};
