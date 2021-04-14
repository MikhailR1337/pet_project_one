import { normalizedComments as initialState } from '../../fixtures';
import { ADD_COMMENT } from '../types';
import { arrToMap } from '../helpers';

export const commentReducer = (state = arrToMap(initialState), action) => {
    const { type, payload, randomId } = action;
    switch (type) {
        case ADD_COMMENT:
            return { ...state, [randomId]: payload.comment };

        default: return state;
    } 
}