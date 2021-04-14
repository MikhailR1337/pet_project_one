import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const articlesGetter = (state) => state.articles;
const filtersGetter = (state) => state.filters;
const commentsGetter = (state) => state.comments;
const idGetter = (_state, props) => props.id;


export const articleFilteredSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters;
    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.filter(elem => elem.value === article.id).length) &&
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
});