import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from './Article';
import { accordionDecorator } from '../decorators/accordion';
import { articleFilteredSelector } from '../redux/selectors/selectors';


const ArticleList = ({ isOpenId, isOpenHandler, articles }) => {
    return (
        <ul className="collapsible">
            {articles.length > 0 && articles.map(article => <Article
                article={article}
                key={article.id}
                isOpenHandler={isOpenHandler(article.id)}
                isOpen={article.id === isOpenId}
                />)}
            {!articles.length && <li>
                <div className="collapsible-header cyan lighten-4">
                    <i className="material-icons red-text">not_interested</i>
                    Статей пока нет
                    <span className="new badge red" data-badge-caption="Можете написать свою"></span>
                </div>
            </li>}
        </ul>
    )
}

ArticleList.propTypes = {
    isOpenId: PropTypes.string,
    articles: PropTypes.array,
    isOpenHandler: PropTypes.func
};



// Фильтруем статьи до их рендера (работает, но есть над чем подумать)
export default connect((state) => {
    
    return {
        articles: articleFilteredSelector(state)
    }

})(accordionDecorator(ArticleList));

// Вариант через фильтрации mapStateToProps. По синтаксису что-то не пошло, надо думать.

/* const mapStateToProps = (state) => ({
    articles: state.articles,
    filters: state.filters
});

export default connect(mapStateToProps => {
    const { selected, dateRange: { from, to } } = mapStateToProps.filters;
    const filteredArticles = mapStateToProps.articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.filter(elem => elem.value === article.id).length === 1) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        articles: filteredArticles
    }
})(accordionDecorator(ArticleList)); */