import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Slider from '@/components/Slider';
import Canvas from '@/components/Canvas';
import Settings from '@/components/Settings';
import './index.less';

export default function IndexPage() {
  return (
    <div className="layout-wrapper">
      <DndProvider backend={HTML5Backend}>
        <Slider />
        <Canvas />
        <Settings />
      </DndProvider>
    </div>
  );
}
