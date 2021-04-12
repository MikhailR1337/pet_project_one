import { articles as initialState } from '../../fixtures';
import { DELETE_ARTICLE } from '../types';

export const articleReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DELETE_ARTICLE: 
            return state.filter(article => article.id !== payload.id);

    default: return state;
    }
}