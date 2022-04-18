import { dynamic } from 'umi';
import { useMemo, memo, useRef } from 'react';
import React from 'react';

export type componentsType = 'media' | 'base' | 'visible';

const DynamicFunc = (type: string) => {
  return dynamic({
    loader: async function () {
      console.log(type, 'tttt');
      const { default: Graph } = await import(
        /* webpackChunkName: "external_A" */ `@/components/base/${type}`
      );
      const Component = Graph;
      return (props: any) => {
        const { config, index } = props;
        return <Component index={index} {...config} />;
      };
    },
  });
};

const DynamicEngine = memo((props: any) => {
  const { template, config } = props;
  const Dynamic = useMemo(() => {
    return DynamicFunc(template.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  return <Dynamic {...props} />;
});

export default DynamicEngine;
