import React, { memo, FC, useEffect, useMemo } from 'react';
import { Input, Select, Form, InputNumber } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const BaseForm: any = {
  Text: (props) => {
    const { item, config } = props;
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
  Select: (props) => {
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
  const { config, editData } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form]);

  return (
    <Form
      form={form}
      name={`form_editor`}
      {...formItemLayout}
      initialValues={config}
    >
      {editData.map((item) => {
        const Component = BaseForm[item.type];
        return <Component item={item} />;
      })}
    </Form>
  );
};

export default memo(FormRender);
