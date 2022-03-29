import React, { memo } from 'react';
import { ITextConfig } from './schema';
const Text = memo((props: ITextConfig & { isTpl: boolean }) => {
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
