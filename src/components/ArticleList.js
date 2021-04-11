import React from 'react';
import { Article } from './Article';
import { accordionDecorator } from '../decorators/accordion';


const ArticleList = ({ isOpenId, isOpenHandler, articles }) => {

    return (
        <ul className="collapsible">
            {articles.map(article => <Article
                article={article}
                key={article.id}
                isOpenHandler={isOpenHandler(article.id)}
                isOpen={article.id === isOpenId}
                />)} 
        </ul>
    )
}

export default accordionDecorator(ArticleList);