import * as React from 'react';
import { Container } from '@antv/dipper-map';
import 'antd/dist/antd.css';

const Demo = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Container />
    </div>
  );
};

Demo.noLayout = true;

export default Demo;
