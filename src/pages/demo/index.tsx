import React, { useState, useEffect, useCallback } from 'react';
import List from './components/List';
import Context from './Context';
import './style.less';
const Demo = () => {
  const [lists, setLists] = useState([]);
  const [dragingNode, setDragingNode] = useState({});
  const [dropNodeIndex, setDropNodeIndex] = useState({});
  useEffect(() => {
    setLists([
      {
        name: '小红',
      },
      {
        name: '小黄',
      },
      {
        name: '小绿',
      },
      {
        name: '小紫',
      },
      {
        name: '小灰',
      },
    ]);
  }, []);
  const onChange = useCallback(
    (dragIndex, dropIndex) => {
      const copyLists = [...lists];
      // const dragData = lists.splice(dragIndex, 1);
      // const before = lists.slice(0, hoverIndex);
      // const after = lists.slice(hoverIndex);
      // setLists([...before.concat(dragData), ...after]);
      const dragData = copyLists.splice(dragIndex, 1);
      const effticeDropIndex =
        dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
      copyLists.splice(effticeDropIndex, 0, dragData[0]);
      setLists(copyLists);
    },
    [lists],
  );

  const handleDragStart = (event) => {
    console.log(event.target.dataset.index, 'target');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // console.log(event.target, 'over')
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    console.log(event.target, 'enter');
  };

  const handleDragLeave = () => {
    console.log('leavel');
  };

  return (
    <Context.Provider
      value={{ dragingNode, setDragingNode, dropNodeIndex, setDropNodeIndex }}
    >
      <div
        className="demo"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        {lists.map((list, index) => (
          <List
            index={index}
            maxLength={lists.length}
            onChange={onChange}
            {...list}
            key={index}
          />
        ))}
        {/* <li className="li" draggable>aaa</li>
      <li className="li" draggable>bbb</li>
      <li className="li" draggable>ccc</li> */}
      </div>
    </Context.Provider>
  );
};
export default Demo;
