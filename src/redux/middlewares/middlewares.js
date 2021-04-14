export const loggerMiddleware = (store) => (next) => (action) => {
    console.log('was used', action);
    next(action);
}