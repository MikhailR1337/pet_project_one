import React, { useState } from 'react';
import { Article } from './Article';
import { articles } from '../fixtures';

export const ArticleList = () => {
    const [isOpenId, setOpenId] = useState(null);

    const isOpenHandler = (id) => () => {
        if (id === isOpenId) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
        
    }
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