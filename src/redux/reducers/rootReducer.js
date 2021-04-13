import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    articles: articleReducer,
    filters: filterReducer
})
