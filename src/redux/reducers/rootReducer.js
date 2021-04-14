import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { commentReducer } from './commentReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    articles: articleReducer,
    comments: commentReducer,
    filters: filterReducer
})
