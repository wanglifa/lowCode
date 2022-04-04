const Text: any = {
  template: {
    type: 'Text',
    h: 36,
    displayName: '文本组件',
  },
  editData: [
    {
      key: 'text',
      name: '文字',
      type: 'Text',
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number',
    },
    {
      key: 'align',
      name: '对齐方式',
      type: 'Select2',
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
    },
  ],
  config: {
    text: '我是文本',
    fontSize: 18,
    align: 'center',
    lineHeight: 2,
  },
};
export default Text;
