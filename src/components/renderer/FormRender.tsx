import React, { memo, FC, useEffect, useContext, useRef } from 'react';
import { Input, Select, Form, InputNumber } from 'antd';
import Context from '@/utils/context';

const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const BaseForm: any = {
  Text: (props) => {
    const { item } = props;
    return (
      <Form.Item label={item.name} name={item.key}>
        <Input />
      </Form.Item>
    );
  },
  TextArea: (props) => {
    const { item } = props;
    return (
      <Form.Item label={item.name} name={item.key}>
        <TextArea rows={4} />
      </Form.Item>
    );
  },
  Number: (props) => {
    const { item } = props;
    return (
      <Form.Item label={item.name} name={item.key}>
        <InputNumber max={item.range && item.range[1]} />
      </Form.Item>
    );
  },
  Select2: (props) => {
    const { item } = props;
    return (
      <Form.Item label={item.name} name={item.key}>
        <Select placeholder="请选择">
          {item.range.map((v: any, i: number) => {
            return (
              <Option value={v.key} key={i}>
                {v.text}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  },
};
// const DynamicFunc = (type: string, componentsType: string) => {
//   return dynamic({
//     loader: async function () {
//       const { default: Graph } = await import(`@/ui-component/${componentsType}/${type}`);
//       const Component = Graph;
//       return (props: any) => {
//         const { config, isTpl } = props;
//         return <Component {...config} isTpl={isTpl} />;
//       };
//     },
//     loading: () => (
//       <div style={{ paddingTop: 10, textAlign: 'center' }}>
//         loading
//       </div>
//     ),
//   });
// };
const FormRender: FC<any> = (props) => {
  const { config, editData, nodeIndex } = props;
  const { state, dispatch } = useContext(Context);
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form, nodeIndex]);

  const onChange = (changedValues, values) => {
    const copyNodeLists = [...state.nodeLists];
    copyNodeLists[nodeIndex].config = values;
    dispatch({
      type: 'setNodeLists',
      nodeLists: copyNodeLists,
    });
  };

  return (
    <Form
      form={form}
      name={`form_editor`}
      {...formItemLayout}
      initialValues={config}
      className="form-render"
      onValuesChange={onChange}
    >
      {editData.map((item, index) => {
        const Component = BaseForm[item.type];
        console.log(item, 'itemssss');
        console.log(Component, 'componetn');
        return <Component item={item} key={index} />;
      })}
    </Form>
  );
};

export default memo(FormRender);
