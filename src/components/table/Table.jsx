import React from 'react';
import { instanceOf } from 'prop-types';
import { Table as AntdTable, Form } from 'antd';

import { getUniqueNames } from '../../common/utils';
import { EMPTY_ARRAY } from '../../common/constants';

import useTableDetails from './hooks/useTableDetails';

import {
  ActionButtons,
  DateRenderer,
  EditableCell,
  TagsRenderer,
} from './components';
import { TABLE_I18N, TAGS } from './constants';
import { Container, StyledAddRowButton } from './Table.styles';

const { ADD_ROW_BTN } = TABLE_I18N;

const filterList = (value, array) => array.includes(value);

const components = {
  body: {
    cell: EditableCell,
  },
};

function Table({ records }) {
  const {
    data,
    editingKey,
    form,
    handleAdd,
    handleCancel,
    handleDelete,
    handleEdit,
    handleSave,
    isEditing,
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
      render: (_, record) => (
        <ActionButtons
          editingKey={editingKey}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSave={handleSave}
          isRowEditable={isEditing(record)}
          record={record}
        />
      ),
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
    <Container>
      <StyledAddRowButton
        disabled={editingKey}
        onClick={handleAdd}
        type='primary'
      >
        {ADD_ROW_BTN}
      </StyledAddRowButton>
      <Form form={form} component={false}>
        <AntdTable
          bordered
          sticky
          columns={columns}
          components={components}
          dataSource={data}
          pagination={false}
          tableLayout='flex'
        />
      </Form>
    </Container>
  );
}

Table.propTypes = {
  records: instanceOf(Array),
};

Table.defaultProps = {
  records: EMPTY_ARRAY,
};

export default Table;
