import React, { memo } from 'react';
const Text = memo((props: any) => {
  const { align, text, fontSize, color, lineHeight, isTpl, index } = props;
  return (
    <>
      <div
        style={{ color, textAlign: align, fontSize, lineHeight }}
        data-index={index}
      >
        {text}
      </div>
    </>
  );
});
export default Text;
