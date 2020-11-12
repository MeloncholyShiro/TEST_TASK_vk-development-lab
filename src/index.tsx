import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Application } from './Application';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger,
            loadingBarMiddleware({
                promiseTypeSuffixes: ['REQUEST', 'DONE', 'ERROR'],
            }),
        ),
    ),
);

render(
    <React.StrictMode>
        <Provider store={store}>
            <Application />
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
