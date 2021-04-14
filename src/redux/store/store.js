import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { loggerMiddleware, uniqueIdMiddleware } from '../middlewares/middlewares';

// с помощью compose добавляем applyMiddleware и redux dev tools
export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(uniqueIdMiddleware, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);