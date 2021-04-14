import { normalizedArticles as initialState } from '../../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../types';
import { arrToMap } from '../helpers';

export const articleReducer = (state = arrToMap(initialState), action) => {
    const { type, payload, randomId } = action;
    switch (type) {
        case DELETE_ARTICLE: 
            const someState = { ...state };
            delete someState[payload.id];
            return someState;

        case ADD_COMMENT:
            const article = state[payload.articleId];
            return {
                ...state,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }

        default: return state;
    }
}