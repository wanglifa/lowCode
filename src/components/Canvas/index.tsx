import React, {
  memo,
  FC,
  useState,
  useRef,
  useContext,
  useEffect,
} from 'react';
import Context from '@/utils/context';
import ComponetRender from '@/components/renderer/ComponentRender';
const Canvas: FC<any> = () => {
  const [compon, setCompon] = useState<any>({});
  const { nodeLists, setNodeLists } = useContext(Context);
  const dropRef = useRef(null);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setNodeLists([JSON.parse(event.dataTransfer.getData('nodeData'))]);
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  useEffect(() => {
    console.log(nodeLists, 'nnnnnnn');
  }, [nodeLists]);
  return (
    <div
      className="canvas-wrapper"
      ref={dropRef}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {nodeLists.map((nodeList) => (
        <ComponetRender {...nodeList} />
      ))}
    </div>
  );
};
export default memo(Canvas);
