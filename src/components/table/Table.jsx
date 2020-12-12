import React from 'react';
import { instanceOf } from 'prop-types';
import { Button, Popconfirm, Table as AntdTable, Form } from 'antd';

import useTableDetails from './hooks/useTableDetails';

import { EditableCell, TagsRenderer } from './components';
import { TABLE_I18N, TAGS } from './constants';

const { ADD_ROW_BTN, SAVE_BTN, CANCEL_BTN, DELETE_BTN, EDIT_BTN } = TABLE_I18N;

const filterList = (value, element) => element.indexOf(value) === 0;

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
      filters: data.map(record => ({ text: record.name, value: record.name })),
      onFilter: (value, record) => filterList(value, record.name),
      title: 'Name',
      width: 200,
    },
    {
      dataIndex: 'date',
      title: 'Date',
      width: 250,
    },
    {
      dataIndex: 'costs',
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
      filters: TAGS.map(tag => ({ text: tag, value: tag })),
      render: TagsRenderer,
    },
    {
      title: 'Note',
      dataIndex: 'note',
      width: 300,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
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
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'costs' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Button onClick={handleAdd} type='primary'>
        {ADD_ROW_BTN}
      </Button>
      <Form form={form} component={false}>
        <AntdTable
          bordered
          columns={columns}
          components={components}
          dataSource={data}
          footer={() => 'Summary'}
          pagination={{ pageSize: 700 }}
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
  records: [],
};

export default Table;
