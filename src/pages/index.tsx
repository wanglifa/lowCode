import React, { createContext, useContext, useReducer, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Slider from '@/components/Slider';
import Canvas from '@/components/Canvas';
import Settings from '@/components/Settings';
import Context from '@/utils/context';
import './index.less';
const reducer = (state, action) => {
  switch (action.type) {
    case 'setNodeLists':
      return { ...state, nodeLists: action.nodeLists };
    case 'setCurrentNode':
      return { ...state, currentNode: action.currentNode };
    default:
      throw new Error();
  }
};
const store = {
  nodeLists: [],
  currentNode: {},
};
export default function IndexPage() {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="layout-wrapper">
        <Slider />
        <Canvas />
        <Settings />
      </div>
    </Context.Provider>
  );
}
