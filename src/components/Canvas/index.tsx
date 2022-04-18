import React, {
  memo,
  FC,
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import Context from '@/utils/context';
import ComponetRender from '@/components/renderer/ComponentRender';
const Canvas: FC<any> = () => {
  const { state, dispatch } = useContext(Context);
  const [isOver, setIsOver] = useState<'up' | 'down' | ''>('');
  const [draging, setDraging] = useState(false);
  const dragIndexRef = useRef(-1);
  const dropIndexRef = useRef(-1);
  const sortDropIndexRef = useRef(-1);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // isOver 是 true 说明可以通过拖拽修改排序
    if (isOver) {
      setIsOver('');
      sortDropIndexRef.current =
        isOver === 'up' ? dropIndexRef.current : dropIndexRef.current + 1;
    } else {
      sortDropIndexRef.current = state.nodeLists.length;
    }
    if (event.dataTransfer.getData('nodeData')) {
      console.log(sortDropIndexRef, 'hhhhdddd');
      const currentNode = {
        ...JSON.parse(event.dataTransfer.getData('nodeData')),
        nodeIndex: state.nodeLists.length,
      };
      state.nodeLists.splice(sortDropIndexRef.current, 0, currentNode);
      dispatch({
        type: 'setNodeLists',
        nodeLists: state.nodeLists,
      });
      dispatch({
        type: 'setCurrentNode',
        currentNode,
      });
    } else {
      onChange(dragIndexRef.current, sortDropIndexRef.current);
    }
  };

  const onChange = (dragIndex, dropIndex) => {
    const copyLists = [...state.nodeLists];
    const dragData = copyLists.splice(dragIndex, 1);
    const effticeDropIndex = dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
    copyLists.splice(effticeDropIndex, 0, dragData[0]);
    // console.log(state.nodeLists, 'nodeLists')
    dispatch({
      type: 'setNodeLists',
      nodeLists: copyLists,
    });
  };
  const handleClick = useCallback((nodeList, index) => {
    dispatch({
      type: 'setCurrentNode',
      currentNode: nodeList,
    });
  }, []);
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index) => {
    dragIndexRef.current = index;
    setTimeout(() => {
      setDraging(true);
    }, 0);
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (event.target.className === 'canvas-wrapper') {
      return;
    } else {
      const index = event.target.dataset.index;
      const hoverBoundingRect = event.target.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = event.clientY - hoverBoundingRect.top;
      dropIndexRef.current = Number(index);
      if (hoverClientY <= hoverMiddleY) {
        setIsOver('up');
      }
      if (hoverClientY > hoverMiddleY) {
        setIsOver('down');
        // dropIndexRef.current = Number(index) + 1;
      }
    }
  };
  const handleDragEnd = () => {
    console.log('end');
    dragIndexRef.current = -1;
    setTimeout(() => {
      setDraging(false);
    }, 0);
  };
  const getStyle: any = useCallback(
    (index) => {
      console.log(dropIndexRef.current, index, 'iiiii');
      if (isOver && index === dropIndexRef.current) {
        return isOver === 'up'
          ? {
              boxShadow: '0 -3px 0 red',
            }
          : {
              boxShadow: '0 3px 0 red',
            };
      } else {
        return {
          boxShadow: 'none',
        };
      }
    },
    [isOver, dropIndexRef],
  );
  return (
    <div className="canvas-wrapper" onDrop={onDrop} onDragOver={onDragOver}>
      {state.nodeLists.map((nodeList, index) => (
        <div
          className={
            state.currentNode.nodeIndex === nodeList.nodeIndex ? 'selected' : ''
          }
          style={{
            opacity: dragIndexRef.current === index && draging ? 0 : 1,
            ...getStyle(index),
          }}
          onClick={() => handleClick(nodeList, index)}
          onDragStart={(event) => handleDragStart(event, index)}
          // onDrop={(event) => onDrop}
          // onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          draggable
        >
          <ComponetRender index={index} {...nodeList} key={index} />
        </div>
      ))}
    </div>
  );
};
export default memo(Canvas);
