import React, { memo, FC, useContext, useEffect } from 'react';
import Context from '@/utils/context';
import FormRender from '@/components/renderer/FormRender';
const Setting: FC<any> = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(state.currentNode, 'ccc');
  }, [state.currentNode]);
  return (
    <div className="setting-wrapper">
      <div className="title">表单配置</div>
      {!!Object.keys(state.currentNode).length && (
        <FormRender {...state.currentNode} />
      )}
    </div>
  );
};
export default memo(Setting);
