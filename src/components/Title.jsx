import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 120,
    fill: '#cbca62',
  };
  const theStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 70,
    fill: '#cbca62',
  };


  const firstPath = {
    initialAxis: {
      x: -170,
      y: -950,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 180,
    },
  };

  const secondPath = {
    ...firstPath,
    initialAxis: {
      x: -50,
      y: -915,
    },
    initialControlPoint: {
      x: 380,
      y: 0,
    },
    endingControlPoint: {
      x: 0,
      y: 0,
    },
    endingAxis: {
      x: 0,
      y: 0,
    },
  };
  const lastPath = {
    ...firstPath,
    initialAxis: {
      x: -150,
      y: -740,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 180,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="AliensPath"
          d={pathFromBezierCurve(firstPath)}
        />
        <path
          id="thePath"
          d={pathFromBezierCurve(secondPath)}
        />
        <path
          id="lastPath"
          d={pathFromBezierCurve(lastPath)}
        >

        </path>
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#AliensPath">
          Defeat
        </textPath>
      </text>
      <text {...theStyle}>
        <textPath xlinkHref="#thePath">
          The
        </textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#lastPath">
          Aliens
        </textPath>
      </text>
    </g>
  );
};

export default Title;
