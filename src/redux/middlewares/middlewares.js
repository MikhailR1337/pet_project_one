import { v4 as uuidv4 } from 'uuid';

export const loggerMiddleware = (store) => (next) => (action) => {
    console.log('was used', action);
    next(action);
}

// Смотрю на флаг action.generateId и если true добавляюю поле uniqueId
export const uniqueIdMiddleware = (_store) => (next) => (action) => {
    if (!action.generateId) return next(action);
    next({
        ...action,
        uniqueId: uuidv4()
    });
}

