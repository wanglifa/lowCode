import React, { memo, FC, useCallback } from 'react';
import basicSchema from '@/components/base/schema';
import './styles.less';
const Slider: FC<any> = () => {
  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, data: any) => {
      console.log(data, 'dataaaaa');
      event.dataTransfer.setData('nodeData', JSON.stringify(data));
      event.dataTransfer.dropEffect = 'move';
    },
    [],
  );
  return (
    <div className="slider-wrapper">
      <div className="slider-list-wrapper">
        <div className="title">基础组件</div>
        <div className="container">
          {Object.keys(basicSchema).map((schemaKey, index) => {
            return (
              <div
                className="slider-list"
                key={index}
                draggable
                onDragStart={(event) =>
                  onDragStart(event, basicSchema[schemaKey])
                }
              >
                {basicSchema[schemaKey].template.displayName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default memo(Slider);
