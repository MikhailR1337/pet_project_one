import React from 'react';
import { Article } from './Article';
import { articles } from '../fixtures';
import { AccordionDecorator } from '../decorators/Accordion'

const ArticleList = ({ isOpenId, isOpenHandler }) => {

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

export default AccordionDecorator(ArticleList);