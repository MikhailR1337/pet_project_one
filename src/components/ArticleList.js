import React from 'react';
import { Article } from './Article';
import { articles } from '../fixtures';

export const ArticleList = () => {
    return (
        <ul className="collapsible">
            {articles.map(article => <Article article={article} />)} 
        </ul>
        
    )
}