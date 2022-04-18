import React, { useCallback, useEffect, useRef, useState } from 'react';

const Test = () => {
  const ref = useRef({});
  const [state, setState] = useState({});
  const callback = useCallback(() => {
    const a = ref.current;
    console.log(ref.current, 'before');
    setState({});
    setTimeout(() => {
      console.log(a, 'a');
      console.log(ref.current, 'after');
    });
  }, [ref]);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  useEffect(() => {
    setState({
      a: 1,
    });
  }, []);
  return <div onClick={callback}>test</div>;
};

export default Test;
