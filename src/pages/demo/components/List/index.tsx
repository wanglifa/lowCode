import React, { useState, useRef, useEffect, useContext, memo } from 'react';
import Context from '../../Context';
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const List = ({ name, index, onChange, key, maxLength }) => {
  const { dragingNode, setDragingNode, dropNodeIndex, setDropNodeIndex } =
    useContext(Context);
  const [draging, setDraging] = useState(false);
  const [isOver, setIsOver] = useState<'up' | 'down' | ''>('');
  const handleDragStart = (event, index) => {
    console.log(event.clientY, 'start');
    event.dataTransfer.dropEffect = 'move';
    setDragingNode({
      index,
      node: event.target,
    });
    // 这里如果不用 setTImeout 就会一拖动目标拖动中的和原位置的元素都会消失
    setTimeout(() => {
      setDraging(true);
    }, 0);
  };
  const handleDragEnd = (event) => {
    console.log('end');
    setTimeout(() => {
      setDraging(false);
    }, 0);
  };
  const handleDragLeave = (event) => {
    setIsOver('');
  };
  const handleDragOver = (event, index) => {
    // console.log(event.clientY, 'over')
    // console.log(event.target, 'targert')
    event.preventDefault();
    // const dragIndex = dragingNode.index;
    // const hoverIndex = index;
    const hoverBoundingRect = event.target.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const hoverClientY = event.clientY - hoverBoundingRect.top;
    // console.log(hoverClientY, 'hoverClientY')
    event.dataTransfer.dropEffect = 'move';
    if (hoverClientY <= hoverMiddleY) {
      setIsOver('up');
      setDropNodeIndex(index);
    }
    if (hoverClientY > hoverMiddleY) {
      setIsOver('down');
      setDropNodeIndex(index + 1);
    }
    // hoverIndex = index;
  };
  const handleDrop = (event, index) => {
    setIsOver('');
    onChange(dragingNode.index, dropNodeIndex);
    // setHighlightIndex(0);
    // onChange(dragingIndex, index);
    // console.log(dragingIndex, 'dropDragIndex', index, 'index')
    // console.log(index, 'index', 'drop')
  };
  const opacity = draging ? 0 : 1;
  const style2: React.CSSProperties =
    isOver === 'up'
      ? {
          boxShadow: '0 -3px 0 red',
        }
      : isOver === 'down'
      ? {
          boxShadow: '0 3px 0 red',
        }
      : {
          boxShadow: 'none',
        };
  return (
    <>
      {/* <div
        className="spacingInterval"
        style={
          index + 1 === highlightIndex
            ? { border: '1px dashed #1890ff', height: '45px' }
            : {}
        }
        onDragOver={handleDragOver}
        onDrop={event => handleDrop(event, index)}
        onDragEnter={evt => handleDragEnter(evt, index + 1)}
        onDragLeave={handleDragLeave}
      ></div> */}
      <li
        style={{ ...style, opacity, ...style2 }}
        onDragStart={(event) => handleDragStart(event, index)}
        onDragEnd={(event) => handleDragEnd(event)}
        // onDragEnter={(event) => handleDragEnter(event)}
        onDragLeave={(event) => handleDragLeave(event)}
        onDrop={(event) => handleDrop(event, index)}
        onDragOver={(event) => handleDragOver(event, index)}
        draggable
        data-index={index}
      >
        {name}
      </li>
    </>
  );
};

export default memo(List);
