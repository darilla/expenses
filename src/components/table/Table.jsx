import React from 'react';
import { instanceOf } from 'prop-types';
import { Button, Popconfirm, Table as AntdTable, Form } from 'antd';

import useTableDetails from './hooks/useTableDetails';
import { getUniqueNames } from '../../common/utils';
import { EMPTY_ARRAY } from '../../common/constants';

import { EditableCell, TagsRenderer, DateRenderer } from './components';
import { TABLE_I18N, TAGS } from './constants';

const { ADD_ROW_BTN, SAVE_BTN, CANCEL_BTN, DELETE_BTN, EDIT_BTN } = TABLE_I18N;

const filterList = (value, array) => array.includes(value);

const components = {
  body: {
    cell: EditableCell,
  },
};

function Table({ records }) {
  const {
    handleDelete,
    handleCancel,
    handleEdit,
    handleSave,
    handleAdd,
    isEditing,
    form,
    editingKey,
    data,
  } = useTableDetails(records);

  // @todo - refactor
  const COLUMNS = [
    {
      dataIndex: 'name',
      editable: true,
      filters: getUniqueNames(data),
      onFilter: (value, record) => filterList(value, record.name),
      title: 'Name',
      width: 200,
    },
    {
      dataIndex: 'date',
      title: 'Date',
      render: (date, record) => DateRenderer(date, isEditing(record)),
      width: 400,
    },
    {
      dataIndex: 'costs',
      inputType: 'number',
      editable: true,
      sorter: (firstRecord, nextRecord) => firstRecord.costs - nextRecord.costs,
      title: 'Costs',
      width: 200,
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: 200,
      onFilter: (value, record) => filterList(value, record.tags),
      filters: TAGS,
      render: (tags, record) => TagsRenderer(tags, isEditing(record)),
    },
    {
      title: 'Note',
      editable: true,
      inputType: 'textarea',
      dataIndex: 'note',
      width: 300,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const isRowEditable = isEditing(record);

        return isRowEditable ? (
          <span>
            <Button type='primary' onClick={() => handleSave(record.key)} ghost>
              {SAVE_BTN}
            </Button>
            <Popconfirm title='Sure to cancel?' onConfirm={handleCancel}>
              <Button type='dashed' danger>
                {CANCEL_BTN}
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <div>
            <Button
              disabled={editingKey !== ''}
              onClick={() => handleEdit(record)}
            >
              {EDIT_BTN}
            </Button>
            <Button
              disabled={editingKey !== ''}
              type='danger'
              onClick={() => handleDelete(record.key)}
              ghost
            >
              {DELETE_BTN}
            </Button>
          </div>
        );
      },
    },
  ];

  const columns = COLUMNS.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      // Properties passed to EditableCell component.
      ...col,
      onCell: record => ({
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Button disabled={editingKey} onClick={handleAdd} type='primary'>
        {ADD_ROW_BTN}
      </Button>
      <Form form={form} component={false}>
        <AntdTable
          bordered
          columns={columns}
          components={components}
          dataSource={data}
          footer={() => 'Summary'}
          pagination={{ pageSize: 100 }}
          rowClassName='editable-row'
          scroll={{ y: 700 }}
        />
      </Form>
    </div>
  );
}

Table.propTypes = {
  records: instanceOf(Array),
};

Table.defaultProps = {
  records: EMPTY_ARRAY,
};

export default Table;
