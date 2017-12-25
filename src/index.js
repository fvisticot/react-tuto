import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { fetchMood } from './actions'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import usersApp from './reducers/'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker';


const loggerMiddleware = createLogger()

let store = createStore(usersApp,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ))


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
