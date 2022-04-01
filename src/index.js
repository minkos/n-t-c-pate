import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, getRobots } from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const logger = createLogger();
const combinedReducers = combineReducers({searchRobots, getRobots});
const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
