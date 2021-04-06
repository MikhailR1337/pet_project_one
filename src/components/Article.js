import React, { useState } from 'react';

export const Article = ({ article }) => {
    const [isOpen, setOpen] = useState(false);


    const isOpenHandler = () => {
        setOpen(!isOpen)
    }

    const toggleCollapsibleBody = isOpen ? "collapsible-body dsblock": "collapsible-body";
    const toggleBadgeCaption = isOpen ? "Закрыть": "Читать далее...";
    const toggleIconImage = isOpen ? "unfold_less": "unfold_more";

    return (
        <li key={article.id}>
            <div className="collapsible-header cyan lighten-5" onClick={isOpenHandler}>
                <i className="material-icons cyan-text">{toggleIconImage}</i>
                {article.title}
                <span className="new badge green" data-badge-caption={toggleBadgeCaption}></span>
            </div>
            <div className={toggleCollapsibleBody}><p>{article.text}</p></div>
        </li>
    )
}