import { normalizedArticles as initialState } from '../../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../types';
import { arrToMap } from '../helpers';

export const articleReducer = (state = arrToMap(initialState), action) => {
    const { type, payload, uniqueId } = action;
    switch (type) {
        // Удаляем статью заменяя state на someState уже без статьи
        case DELETE_ARTICLE: 
            const someState = { ...state };
            delete someState[payload.id];
            return someState;

        // Добавляем комменатарий, только в comments не меняя все остальное
        case ADD_COMMENT:
            const article = state[payload.articleId];
            return {
                ...state,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(uniqueId)
                }
            }

        default: return state;
    }
}