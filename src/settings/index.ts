import { Input } from 'antd';
export const elements = [
  {
    text: '输入框',
    name: 'input',
    schema: {
      title: '输入框',
      type: 'string',
      widget: Input,
    },
    setting: {
      props: {
        title: '选项',
        type: 'object',
        labelWidth: 80,
        properties: {
          allowClear: {
            title: '是否带清除按钮',
            description: '填写内容后才会出现x哦',
            type: 'boolean',
          },
          addonBefore: {
            title: '前tab',
            type: 'string',
          },
          addonAfter: {
            title: '后tab',
            type: 'string',
          },
          prefix: {
            title: '前缀',
            type: 'string',
          },
          suffix: {
            title: '后缀',
            type: 'string',
          },
        },
      },
      minLength: {
        title: '最短字数',
        type: 'number',
      },
      maxLength: {
        title: '最长字数',
        type: 'number',
      },
      pattern: {
        title: '校验正则表达式',
        type: 'string',
        props: {
          placeholder: '填写正则表达式',
        },
      },
    },
  },
  {
    text: '大输入框',
    name: 'textarea',
    schema: {
      title: '编辑框',
      type: 'string',
      format: 'textarea',
    },
    setting: {
      props: {
        title: '选项',
        type: 'object',
        labelWidth: 80,
        properties: {
          autoSize: {
            title: '高度自动',
            type: 'boolean',
          },
          row: {
            title: '指定高度',
            type: 'number',
          },
        },
      },
      minLength: {
        title: '最短字数',
        type: 'number',
      },
      maxLength: {
        title: '最长字数',
        type: 'number',
      },
      pattern: {
        title: '校验正则表达式',
        type: 'string',
        props: {
          placeholder: '填写正则表达式',
        },
      },
    },
  },
  {
    text: '日期选择',
    name: 'date',
    schema: {
      title: '日期选择',
      type: 'string',
      format: 'date',
    },
    setting: {
      format: {
        title: '格式',
        type: 'string',
        enum: ['dateTime', 'date', 'time'],
        enumNames: ['日期时间', '日期', '时间'],
      },
    },
  },
  {
    text: '数字输入框',
    name: 'number',
    schema: {
      title: '数字输入框',
      type: 'number',
    },
    setting: {},
  },
  {
    text: '是否选择',
    name: 'checkbox',
    schema: {
      title: '是否选择',
      type: 'boolean',
      widget: 'checkbox',
    },
    setting: {
      default: {
        title: '是否默认勾选',
        type: 'boolean',
      },
    },
  },
  {
    text: '是否switch',
    name: 'switch',
    schema: {
      title: '是否选择',
      type: 'boolean',
      widget: 'switch',
    },
    setting: {
      default: {
        title: '是否默认开启',
        type: 'boolean',
      },
    },
  },
  {
    text: '下拉单选',
    name: 'select',
    schema: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
      widget: 'select',
    },
    setting: {
      enumList: {
        title: '选项',
        type: 'array',
        widget: 'simpleList',
        className: 'frg-options-list',
        items: {
          type: 'object',
          properties: {
            value: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '字段',
            },
            label: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '名称',
            },
          },
        },
        props: {
          hideMove: true,
          hideCopy: true,
        },
      },
    },
  },
  {
    text: '点击单选',
    name: 'radio',
    schema: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
      widget: 'radio',
    },
    setting: {
      enumList: {
        title: '选项',
        type: 'array',
        widget: 'simpleList',
        className: 'frg-options-list',
        items: {
          type: 'object',
          properties: {
            value: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '字段',
            },
            label: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '名称',
            },
          },
        },
        props: {
          hideMove: true,
          hideCopy: true,
        },
      },
    },
  },
  {
    text: '下拉多选',
    name: 'multiSelect',
    schema: {
      title: '多选',
      description: '下拉多选',
      type: 'array',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['杭州', '武汉', '湖州', '贵阳'],
      widget: 'multiSelect',
    },
    setting: {
      enumList: {
        title: '选项',
        type: 'array',
        widget: 'simpleList',
        className: 'frg-options-list',
        items: {
          type: 'object',
          properties: {
            value: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '字段',
            },
            label: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '名称',
            },
          },
        },
        props: {
          hideMove: true,
          hideCopy: true,
        },
      },
    },
  },
  {
    text: '点击多选',
    name: 'checkboxes',
    schema: {
      title: '多选',
      type: 'array',
      widget: 'checkboxes',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['杭州', '武汉', '湖州', '贵阳'],
    },
    setting: {
      enumList: {
        title: '选项',
        type: 'array',
        widget: 'simpleList',
        className: 'frg-options-list',
        items: {
          type: 'object',
          properties: {
            value: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '字段',
            },
            label: {
              title: '',
              type: 'string',
              className: 'frg-options-input',
              props: {},
              placeholder: '名称',
            },
          },
        },
        props: {
          hideMove: true,
          hideCopy: true,
        },
      },
    },
  },
  {
    text: 'HTML',
    name: 'html',
    schema: {
      title: 'HTML',
      type: 'string',
      widget: 'html',
    },
    setting: {
      props: {
        type: 'object',
        properties: {
          value: {
            title: '展示内容',
            type: 'string',
          },
        },
      },
    },
  },
];
export const defaultSettings = [
  {
    title: '基础组件',
    widgets: elements,
    show: true,
    useCommon: true, // TODO: 是否将common
  },
];
