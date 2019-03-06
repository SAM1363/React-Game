import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Game from './container/Game'
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

// ここでstoreを作っている. storeという変数に代入　//
const store = createStore(
    reducer, // initialStateが入っている //
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// redux使うためのツール//
);


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
