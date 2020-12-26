/* eslint-disable no-param-reassign */
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import moment from 'moment';

import {
  EMPTY_ARRAY,
  EMPTY_STRING,
  DATE_FORMAT,
  NO_VALUE,
} from '../../../common/constants';

import { ROW_DEFAULT_FIELDS } from '../constants';

const { useForm } = Form;

function useTableDetails(records) {
  const [data, updateData] = useState(records || EMPTY_ARRAY);
  const [editingKey, setEditingKey] = useState(NO_VALUE);

  const [form] = useForm();

  const isEditing = record => record.key === editingKey;

  const handleAdd = useCallback(() => {
    // todo - use generator to create unique id
    const generateKey = Math.random();

    // Set initial values for a new record.
    form.setFieldsValue({ ...ROW_DEFAULT_FIELDS, key: generateKey });

    updateData([{ ...ROW_DEFAULT_FIELDS, key: generateKey }, ...data]);
    setEditingKey(generateKey);
  }, [data, form]);

  const handleSave = useCallback(
    async recordKey => {
      try {
        const row = await form.validateFields();
        const tableData = [...data];
        const index = tableData.findIndex(item => recordKey === item.key);

        // Edit record.
        const dateString = row.date.format(DATE_FORMAT);
        // The date value for non-editable field should be a string.
        tableData.splice(index, 1, { ...row, date: dateString });

        updateData(tableData);
        setEditingKey(NO_VALUE);
      } catch (errInfo) {
        // eslint-disable-next-line no-console
        console.log('Validate Failed:', errInfo);
      }
    },
    [data, form],
  );

  const handleEdit = useCallback(
    record => {
      // The date value for editable field needs to be a moment object.
      const momentDate = moment(record.date, [DATE_FORMAT]);

      form.setFieldsValue({ ...record, date: momentDate });

      setEditingKey(record.key);
    },
    [form],
  );

  const handleCancel = useCallback(() => setEditingKey(EMPTY_STRING), []);

  const handleDelete = recordKey => {
    const updatedDate = [...data].filter(item => item.key !== recordKey);

    updateData(updatedDate);
  };

  return {
    data,
    editingKey,
    form,
    handleAdd,
    handleCancel,
    handleDelete,
    handleEdit,
    handleSave,
    isEditing,
  };
}

export default useTableDetails;
