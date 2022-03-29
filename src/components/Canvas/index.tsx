import React, { memo, FC, useState, useRef } from 'react';
const Canvas: FC<any> = () => {
  const [compon, setCompon] = useState<any>({});
  const dropRef = useRef(null);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(JSON.parse(event.dataTransfer.getData('item')));
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  return (
    <div
      className="canvas-wrapper"
      ref={dropRef}
      onDrop={onDrop}
      onDragOver={onDragOver}
    ></div>
  );
};
export default memo(Canvas);
