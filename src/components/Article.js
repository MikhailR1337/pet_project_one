import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommentList } from './CommentList';
import PropTypes from 'prop-types';
import FormCommentAdd from './forms/FormCommentAdd';
import { CSSTransition } from 'react-transition-group';
import { deleteArticle } from '../redux/actionCreaters/actionCreaters';

class Article extends Component {
    static propTypes = {
        // from ArticleList
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        isOpenHandler: PropTypes.func,
        // from Redux
        deleteArticle: PropTypes.func
    }.isRequired

    // некоторая оптимизация => больше не перерисовывем все Article при открытии/закрытии
    // shouldComponentUpdate(nextProps, _nextState) {
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    deleteHandler = () => {
        const { article, deleteArticle } = this.props;
        deleteArticle(article.id, article.comments);
    }

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
                    <i className="material-icons green-text text-darken-4">{this.toggleIconImage}</i>
                    {article.title}
                    <span className="new badge green" data-badge-caption={this.toggleBadgeCaption}></span>
                </div>
                <CSSTransition in={isOpen} timeout={300} classNames="article">
                    <div className={this.toggleCollapsibleBody}>
                        <p>{article.text}</p>
                        <CommentList isOpen={isOpen} comments={article.comments} />
                        {isOpen && <FormCommentAdd articleId={article.id} />}
                        <div className="right-align">
                            <i className="material-icons medium red-text" onClick={this.deleteHandler}>delete</i>
                        </div>
                    </div>
                </CSSTransition>
            </li>
        );
    }
};

// прокидываю в this.props deleteArticle
export default connect(null, { deleteArticle })(Article);
