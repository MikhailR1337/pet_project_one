import { DELETE_ARTICLE, SELECT_CHANGED, DAYPICKER_CHANGED } from '../types';

const initialState = {
    selectedId: [],
    dateRange: {
        from: undefined,
        to: undefined
    }
}

export const filterReducer = (filterState = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SELECT_CHANGED:
            return { ...filterState, selectedId: payload.selectedId };
        case DAYPICKER_CHANGED:
            return { ...filterState, dateRange: payload.dateRange };
        case DELETE_ARTICLE:
            return { ...filterState, selectedId: filterState.selectedId.filter(id => id !== payload.id) };
        default: return filterState;
    }
}