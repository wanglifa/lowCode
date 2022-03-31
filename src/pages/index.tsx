import React, { createContext, useContext, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Slider from '@/components/Slider';
import Canvas from '@/components/Canvas';
import Settings from '@/components/Settings';
import Context from '@/utils/context';
import './index.less';

export default function IndexPage() {
  const [nodeLists, setNodeLists] = useState([]);
  return (
    <Context.Provider value={{ nodeLists, setNodeLists }}>
      <div className="layout-wrapper">
        <Slider />
        <Canvas />
        <Settings />
      </div>
    </Context.Provider>
  );
}
