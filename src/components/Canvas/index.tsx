import React, { memo, FC, useState } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
const Canvas: FC<any> = () => {
  const [compon, setCompon] = useState<any>({});
  const [collectProps, dropRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
    accept: 'box',
    drop: (item: any, minoter) => {
      setCompon(item.dragItem.schema);
      console.log(item, 'iiii');
    },
    // collect 函数，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
    }),
  });
  return (
    <div className="canvas-wrapper" ref={dropRef}>
      {compon.widget && <compon.widget />}
    </div>
  );
};
export default memo(Canvas);
