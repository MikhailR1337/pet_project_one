import { normalizedComments } from '../../fixtures';

const initialState = normalizedComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export const commentReducer = (state = initialState, action) => {
    return state;
}