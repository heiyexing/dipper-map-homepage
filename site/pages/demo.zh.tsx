import * as React from 'react';

const Demo = () => {
  return (
    <iframe
      src="https://antv.vision/DipperMap/container"
      style={{ height: '100vh', width: '100vw', borderWidth: 0 }}
    />
  );
};

Demo.noLayout = true;

export default Demo;
