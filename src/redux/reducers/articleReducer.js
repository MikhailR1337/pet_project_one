import { articles as initialState } from '../../fixtures';
import { DELETE_ARTICLE } from '../types';

export const articleReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case DELETE_ARTICLE: return state;

    default: return state;
    }
}