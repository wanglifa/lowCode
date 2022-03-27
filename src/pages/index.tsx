import React from 'react';
import Slider from '@/components/Slider';
import Canvas from '@/components/Canvas';
import Settings from '@/components/Settings';

export default function IndexPage() {
  return (
    <div>
      <Slider />
      <Canvas />
      <Settings />
    </div>
  );
}
