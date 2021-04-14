import { DELETE_ARTICLE, SELECT_CHANGED, DAYPICKER_CHANGED } from '../types';

const initialState = {
    selected: [],
    dateRange: {
        from: undefined,
        to: undefined
    }
}

export const filterReducer = (filterState = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SELECT_CHANGED:
            return { ...filterState, selected: payload.selected };
            
        case DAYPICKER_CHANGED:
            return { ...filterState, dateRange: payload.dateRange };
            
        case DELETE_ARTICLE:
            return { ...filterState, selected: filterState.selected.filter(elem => elem.value !== payload.id) };

        default: return filterState;
    }
}