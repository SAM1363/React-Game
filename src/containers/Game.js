import { connect } from 'react-redux';

import App from '../App';
import { moveObjects } from '../action/index';

const mapStateToProps = (state) => ({
  angle: state.angle,
});

//dont understand//
const mapDispatchToProps = (dispatch) => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;