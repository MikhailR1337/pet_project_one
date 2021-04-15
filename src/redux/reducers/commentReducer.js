import { normalizedComments as initialState } from '../../fixtures';
import { ADD_COMMENT, DELETE_ARTICLE } from '../types';
import { arrToMap } from '../helpers';

export const commentReducer = (state = arrToMap(initialState), action) => {
    const { type, payload, uniqueId, } = action;
    switch (type) {
        case ADD_COMMENT:
            // Перехватываю payload.comment и докидываю ему uniqueId
            const newComment = {id: uniqueId, ...payload.comment};
            return { ...state, [uniqueId]: newComment };
        // Удаляем все комментарии привязанные к удаленной статье
        case DELETE_ARTICLE:
            return Object.keys(state)
                .filter(key => !payload.comments.includes(key))
                .reduce((acc, current) => ({ ...acc, [current]: state[current] }), {});

        default: return state;
    } 
}