import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CanvasPosition} from './utils/formuals';
import Canvas from './components/Canvas';

class App extends Component {
  componentDidMount(){
    const self = this;
    setInterval(() =>{
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }

  trackMouse(event){
    this.canvasMousePosition = CanvasPosition(event);
  }
  render() {
    return (
        <Canvas 
          angle={this.props.angle}
          trackMouse={event => (this.trackMouse(event))}
        />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
