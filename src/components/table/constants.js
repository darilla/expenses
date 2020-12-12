const NO_DATA_PLACEHOLDER = 'N/A';

export const TAG = {
  shopping: {
    color: 'volcano',
    name: 'shopping',
  },
  cats: {
    color: 'geekblue',
    name: 'cats',
  },
  selfGift: {
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

export const TAGS = Object.keys(TAG).map(key => TAG[key].name);

export const ROW_DEFAULT_FIELDS = {
  costs: 0,
  date: NO_DATA_PLACEHOLDER,
  key: Math.random(),
  name: NO_DATA_PLACEHOLDER,
  note: NO_DATA_PLACEHOLDER,
  tags: [NO_DATA_PLACEHOLDER],
};

export const TABLE_I18N = {
  ADD_ROW_BTN: 'Add a row',
  SAVE_BTN: 'Save',
  CANCEL_BTN: 'Cancel',
  DELETE_BTN: 'Delete',
  EDIT_BTN: 'Edit',
};
