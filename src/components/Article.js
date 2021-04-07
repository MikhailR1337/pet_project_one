import React from 'react';
import { CommentList } from './CommentList';
import PropTypes from 'prop-types';

export const Article = ({ article, isOpen, isOpenHandler }) => {

    // Меняем классы в зависимости от isOpen
    const toggleCollapsibleBody = isOpen ? "collapsible-body dsblock cyan lighten-5": "collapsible-body";
    // Меняем текст Badge в зависимости от isOpen
    const toggleBadgeCaption = isOpen ? "Закрыть": "Читать далее...";
    // Меняем icon в зависимости от isOpen
    const toggleIconImage = isOpen ? "unfold_less": "unfold_more";

    return (
        <li>
            <div className="collapsible-header cyan lighten-4" onClick={isOpenHandler}>
                <i className="material-icons green-text text-accent-3">{toggleIconImage}</i>
                {article.title}
                <span className="new badge green" data-badge-caption={toggleBadgeCaption}></span>
            </div>
            <div className={toggleCollapsibleBody}>
                <p>{article.text}</p>
                <CommentList comments={article.comments} /> 
            </div>
        </li>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    isOpenHandler: PropTypes.func
}.isRequired