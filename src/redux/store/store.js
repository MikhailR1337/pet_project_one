import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { loggerMiddleware } from '../middlewares/middlewares';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);