import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';
// import img from '../img/maroon.jpg';

const Sky = () => {
  const gameHeight = 1200;

  // const image = {
  //   backgroundImage: `url(${img})`
  // }

  return (
    <rect
      x={skyAndGroundWidth / -2}
      y={100 - gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
