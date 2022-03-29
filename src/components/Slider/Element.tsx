import React, { memo, FC, useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
const Element: FC<any> = ({ text, name, schema }) => {
  const dragRef = useRef<HTMLDivElement>(null);
  // const [{ isDragging }, dragRef] = useDrag({
  //   type: 'box',
  //   item: {
  //     dragItem: {
  //       schema,
  //     },
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });
  useEffect(() => {
    dragRef.current!.addEventListener('dragstart', (event: any) => {
      if (event) {
        event.dataTransfer.setData('item', JSON.stringify({ a: 1 }));
        event.dataTransfer.dropEffect = 'move';
      }
    });
  }, []);
  return (
    <div className="component-list" draggable="true" ref={dragRef}>
      {text}
    </div>
  );
};

export default memo(Element);
