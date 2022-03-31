import React, { memo, FC, useContext } from 'react';
import Context from '@/utils/context';
import FormRender from '@/components/renderer/FormRender';
const Setting: FC<any> = () => {
  const { nodeLists, setNodeLists } = useContext(Context);

  return (
    <div className="setting-wrapper">
      <div className="title">表单配置</div>
      {/* <FormRender {...nodeLists}/> */}
    </div>
  );
};
export default memo(Setting);
