import React, {
  memo,
  FC,
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import Context from '@/utils/context';
import ComponetRender from '@/components/renderer/ComponentRender';
const Canvas: FC<any> = () => {
  const { state, dispatch } = useContext(Context);
  const dropRef = useRef(null);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.dataTransfer.getData('nodeData')) {
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
    } else {
      console.log(event.dataTransfer);
    }
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event.target, 'ttt');
    event.dataTransfer.dropEffect = 'move';
  };

  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, nodeList: any) => {
      console.log('abc');
      // event.stopPropagation();
      // event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('dragData', nodeList);
    },
    [],
  );

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.target.dataset.index, 'index');
  };

  const handleClick = useCallback((nodeList, index) => {
    dispatch({
      type: 'setCurrentNode',
      currentNode: nodeList,
    });
  }, []);
  return (
    <div
      className="canvas-wrapper"
      ref={dropRef}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {state.nodeLists.map((nodeList, index) => (
        <div
          className={
            state.currentNode.nodeIndex === nodeList.nodeIndex ? 'selected' : ''
          }
          onClick={() => handleClick(nodeList, index)}
          onDragStart={(event) => onDragStart(event, nodeList)}
          onDragEnd={onDragEnd}
          draggable
          data-index={index}
        >
          <ComponetRender index={index} {...nodeList} key={index} />
        </div>
      ))}
    </div>
  );
};
export default memo(Canvas);
