import React, { memo, FC } from 'react';
import { useDrag } from 'react-dnd';
const Element: FC<any> = ({ text, name, schema }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'box',
    item: {
      dragItem: {
        schema,
      },
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="component-list" ref={dragRef}>
      {text}
    </div>
  );
};

export default memo(Element);
