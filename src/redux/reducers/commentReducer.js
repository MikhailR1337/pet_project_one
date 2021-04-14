import { normalizedComments as initialState } from '../../fixtures';
import { ADD_COMMENT } from '../types';
import { arrToMap } from '../helpers';

export const commentReducer = (state = arrToMap(initialState), action) => {
    const { type, payload, uniqueId } = action;
    switch (type) {
        case ADD_COMMENT:
            // Перехватываю payload.comment и докидываю ему uniqueId
            const newComment = {id: uniqueId, ...payload.comment};
            return { ...state, [uniqueId]: newComment };

        default: return state;
    } 
}