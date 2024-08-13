import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';

import { AppAction } from '../actions/types';
import { AppState, rootReducer } from '../reducers';

const middleware = [thunk as ThunkMiddleware<AppState, AppAction>];

if (process.env.NODE_ENV !== 'production') {
    // middleware.push(logger);
}

const enhancers = [applyMiddleware(...middleware)];
const store = createStore(rootReducer, undefined, composeWithDevTools(...enhancers));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', async () => {
        const nextRootReducer = require('../reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export type AppDispatch = typeof store.dispatch;

export default store;
