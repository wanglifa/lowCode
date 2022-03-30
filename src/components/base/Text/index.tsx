import React, { memo } from 'react';
const Text = memo((props: any) => {
  const { align, text, fontSize, color, lineHeight, isTpl } = props;
  return (
    <>
      <div style={{ color, textAlign: align, fontSize, lineHeight }}>
        {text}
      </div>
    </>
  );
});
export default Text;
