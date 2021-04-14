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



// Фильтруем статьи до их рендера
export default connect((state) => {
    
    return {
        articles: articleFilteredSelector(state)
    }

})(accordionDecorator(ArticleList));
