import { useCallback, useState } from 'react';
import { Form } from 'antd';

import { ROW_DEFAULT_FIELDS } from '../constants';

const { useForm } = Form;

function useTableDetails(records) {
  const [data, updateData] = useState(records || []);
  const [editingKey, setEditingKey] = useState('');

  const [form] = useForm();

  const isEditing = record => record.key === editingKey;

  const handleAdd = useCallback(
    () => updateData([...data, ROW_DEFAULT_FIELDS]),
    [data],
  );

  const handleSave = useCallback(
    async recordKey => {
      try {
        const row = await form.validateFields();
        const tableData = [...data];
        const index = tableData.findIndex(item => recordKey === item.key);

        if (index > -1) {
          const newItem = tableData[index];

          tableData.splice(index, 1, { ...newItem, ...row, tags: [] });
        } else {
          tableData.push(row);
        }

        updateData(tableData);
        setEditingKey('');
      } catch (errInfo) {
        // eslint-disable-next-line no-console
        console.log('Validate Failed:', errInfo);
      }
    },
    [data, form],
  );

  const handleEdit = useCallback(
    record => {
      form.setFieldsValue(record);

      setEditingKey(record.key);
    },
    [form],
  );

  const handleCancel = useCallback(() => setEditingKey(''), []);

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
