import React from 'react';
import { instanceOf } from 'prop-types';
import { Table as AntdTable, Form } from 'antd';

import { getUniqueNames } from '../../common/utils';
import { EMPTY_ARRAY } from '../../common/constants';

import useTableDetails from './hooks/useTableDetails';

import { ActionButtons, EditableCell, TagsRenderer } from './components';
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
    handleAdd,
    handleCancel,
    handleDelete,
    handleEdit,
    handleSave,
    isEditing,
    form,
  } = useTableDetails(records);

  const customTags = form.getFieldValue().tags || [];

  const customTagsFilterModel = Object.keys(customTags).map(key => ({
    text: customTags[key],
    value: customTags[key],
  }));

  // @todo - refactor
  const COLUMNS = [
    {
      dataIndex: 'name',
      editable: true,
      required: true,
      filters: !editingKey && getUniqueNames(data),
      onFilter: (value, record) => filterList(value, record.name),
      title: 'Name',
      width: 200,
    },
    {
      dataIndex: 'date',
      editable: true,
      inputType: 'date',
      required: true,
      title: 'Date',
      width: 400,
    },
    {
      dataIndex: 'costs',
      editable: true,
      inputType: 'number',
      required: true,
      sorter: (firstRecord, nextRecord) => firstRecord.costs - nextRecord.costs,
      title: 'Costs',
      width: 200,
    },
    {
      dataIndex: 'tags',
      inputType: 'tags',
      filters: [...TAGS, ...customTagsFilterModel],
      onFilter: (value, record) => filterList(value, record.tags),
      title: 'Tags',
      width: 250,
      render: (tags, record) => (
        <TagsRenderer form={form} tags={tags} isEditing={isEditing(record)} />
      ),
    },
    {
      dataIndex: 'note',
      editable: true,
      inputType: 'textarea',
      title: 'Note',
      width: 300,
    },
    {
      title: 'Action',
      dataIndex: 'action',
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
        required: col.required,
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
