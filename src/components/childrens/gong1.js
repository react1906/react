import React,{useState ,Component} from 'react'

import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `name ${i}`,
    age: 32,
    time:'2000-10-11',
    kehu:`客户.${i}`,
    nanes:'李小明',
    gongsi:`SJ2019032401000${i}`,
    kehuName:'2000-10-1',
    oldtext:'审批结果',
    address: `London Park no. ${i}`,
     bezhu:'111111111111',
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  var columns = [
    {
      title: '审批编号',
      dataIndex: 'name',
      width: '8%',
      editable: true,
    },
    {
      title: '审批时间',
      dataIndex: 'time',
      width: '12.5%',
      editable: true,
    },
    {
      title: '审批人员',
      dataIndex: 'nanes',
      width: '10%',
      editable: true,
    },
    {
        title: '审批类型',
        dataIndex: 'kehu',
        width: '10%',
        editable: true,
    },
    {
        title: '业务编号',
        dataIndex: 'gongsi',
        width: '15%',
        editable: true,
    },
    {
        title: '提交时间',
        dataIndex: 'kehuName',
        width: '10%',
        editable: true,
    },
    {
        title: '审批结果',
        dataIndex: 'oldtext',
        width: '14%',
        editable: true,
    },
    {
        title: '备注',
        dataIndex:'newtext',
        width: '14%',
        editable: true,
    }
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default EditableTable