import { dynamic } from 'umi';
import { useMemo, memo } from 'react';
import React from 'react';

export type componentsType = 'media' | 'base' | 'visible';

const DynamicFunc = (type: string) => {
  return dynamic({
    loader: async function () {
      const { default: Graph } = await import(`@/components/base/${type}`);
      const Component = Graph;
      return (props: any) => {
        const { config, isTpl } = props;
        return <Component {...config} isTpl={isTpl} />;
      };
    },
    loading: () => (
      <div style={{ paddingTop: 10, textAlign: 'center' }}>loading</div>
    ),
  });
};

const DynamicEngine = memo((props: any) => {
  const { type, config } = props;
  const Dynamic = useMemo(() => {
    return DynamicFunc(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  return <Dynamic {...props} />;
});

export default DynamicEngine;
