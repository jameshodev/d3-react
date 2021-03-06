import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { Face } from './Face';

const width = 160;
const height = 160;

const array = range(6 * 3);

const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={10}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={10 + Math.random() * 10}
      // glassesOffsetX={20}
      // glassesOffsetY={20}
      mouthWidth={10}
      mouthRadius={40}
    />
  ));

export default App;
