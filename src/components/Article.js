import React, { Component } from 'react';
import { CommentList } from './CommentList';
import PropTypes from 'prop-types';

export class Article extends Component {
    static propTypes = {
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

    // некоторая оптимизация => больше не перерисовывем все Article при открытии/закрытии
/*     shouldComponentUpdate(nextProps, _nextState) {
        return nextProps.isOpen !== this.props.isOpen;
    } */

    render() {
        const { article, isOpen, isOpenHandler } = this.props;
        // Меняем классы в зависимости от isOpen (Класс dsblock отвечает за открытие/закрытие)
        this.toggleCollapsibleBody = isOpen ? "collapsible-body dsblock cyan lighten-5": "collapsible-body";
        // Меняем текст Badge в зависимости от isOpen
        this.toggleBadgeCaption = isOpen ? "Закрыть": "Читать далее...";
        // Меняем icon в зависимости от isOpen
        this.toggleIconImage = isOpen ? "unfold_less": "unfold_more";

        return (
            <li>
                <div className="collapsible-header cyan lighten-4" onClick={isOpenHandler}>
                    <i className="material-icons green-text text-accent-3">{this.toggleIconImage}</i>
                    {article.title}
                    <span className="new badge green" data-badge-caption={this.toggleBadgeCaption}></span>
                </div>
                <div className={this.toggleCollapsibleBody}>
                    <p>{article.text}</p>
                    <CommentList comments={article.comments} /> 
                </div>
            </li>
        );
    }
};