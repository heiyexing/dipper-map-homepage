import React, { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    location.replace('https://antv.vision/DipperMap/');
  }, []);

  return <></>;
};

Demo.noLayout = true;

export default Demo;
