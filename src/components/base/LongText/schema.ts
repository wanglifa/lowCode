export type TLongTextSelectKeyType = 'left' | 'center' | 'right';
const LongText: any = {
  template: {
    type: 'LongText',
    h: 36,
    displayName: '长文本组件',
  },
  editData: [
    {
      key: 'text',
      name: '文字',
      type: 'TextArea',
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number',
    },
    {
      key: 'textAlign',
      name: '对齐方式',
      type: 'Select',
      range: [
        {
          key: 'left',
          text: '左对齐',
        },
        {
          key: 'center',
          text: '居中对齐',
        },
        {
          key: 'right',
          text: '右对齐',
        },
      ],
    },
    {
      key: 'lineHeight',
      name: '行高',
      type: 'Number',
      step: 0.1,
    },
    {
      key: 'padding',
      name: '填充间距',
      type: 'Number',
    },
    {
      key: 'radius',
      name: '背景圆角',
      type: 'Number',
    },
  ],
  config: {
    text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
    fontSize: 14,
    lineHeight: 1.8,
    textAlign: 'left',
    padding: 0,
    radius: 0,
  },
};

export default LongText;
