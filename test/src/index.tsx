import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from 'components/App';
import { rootReducer } from "store/reducers";
import thunk from 'redux-thunk'

import './global.scss';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);
