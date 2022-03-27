import React, { memo, FC } from 'react';
import { defaultSettings } from '@/settings';
import Element from './Element';

const Slider: FC<any> = () => {
  return (
    <div className="slider-wrapper">
      {defaultSettings.map((items, index) => {
        return (
          <div key={index}>
            <div className="slider-wrapper-title">{items.title}</div>
            <ul className="component-wrapper">
              {items.widgets?.map((item, index1) => (
                <Element key={index1} {...item} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default memo(Slider);
