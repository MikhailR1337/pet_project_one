import { DELETE_ARTICLE, SELECT_CHANGED, DAYPICKER_CHANGED } from '../types';

export const deleteArticle = (id) => {
    return { 
        type: DELETE_ARTICLE, 
        payload: { id } 
    };
}

export const selectChanged = (selected) => {
    return { 
        type: SELECT_CHANGED, 
        payload: { selected } 
    };
}

export const daypickerChanged = (dateRange) => {
    return { 
        type: DAYPICKER_CHANGED, 
        payload: { dateRange } 
    };
}


