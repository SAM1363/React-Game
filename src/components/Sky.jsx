import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';
import img from '../img/maroon.jpg';

const Sky = () => {
  const gameHeight = 1200;

  const image = {
    backgroundImage: `url(${img})`,
    width: 100%,
  }

  return (
    <rect
      style={image}
      x={skyAndGroundWidth / -2}
      y={100 - gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
