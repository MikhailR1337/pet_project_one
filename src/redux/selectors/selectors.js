import { createSelector } from 'reselect';

const articlesGetter = (state) => state.articles;
const filtersGetter = (state) => state.filters;

export const articleFilteredSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters;
    return articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.filter(elem => elem.value === article.id).length) &&
            (!from || !to || (published > from && published < to))
    });
});