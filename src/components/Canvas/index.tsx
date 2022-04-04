import React, {
  memo,
  FC,
  useState,
  useRef,
  useContext,
  useEffect,
} from 'react';
import Context from '@/utils/context';
import ComponetRender from '@/components/renderer/ComponentRender';
const Canvas: FC<any> = () => {
  const { state, dispatch } = useContext(Context);
  const dropRef = useRef(null);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const currentNode = {
      ...JSON.parse(event.dataTransfer.getData('nodeData')),
      nodeIndex: state.nodeLists.length,
    };
    event.preventDefault();
    dispatch({
      type: 'setNodeLists',
      nodeLists: state.nodeLists.concat(currentNode),
    });
    dispatch({
      type: 'setCurrentNode',
      currentNode,
    });
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
    >
      {state.nodeLists.map((nodeList, index) => (
        <ComponetRender index={index} {...nodeList} key={index} />
      ))}
    </div>
  );
};
export default memo(Canvas);
