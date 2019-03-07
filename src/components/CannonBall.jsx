import React from 'react'
import PropTypes from 'prop-types'

const CannonBall =(props)=>{
   const cannonBallStyle ={
       fill: '#777',
       srtoke: '#444',
       strokewidth: '2px',
   };
   return (
       <ellipse 
            style={cannonBallStyle}
            cx={props.position.x}
            cy={props.position.y}
            rx= '16'
            ry= '16'
       />
   );
};

CannonBall.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default CannonBall;