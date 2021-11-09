import * as React from 'react';

const Demo = () => {
  React.useEffect(() => {
    location.replace('https://antv.vision/DipperMap/');
  }, []);

  return <></>;
};

Demo.noLayout = true;

export default Demo;
