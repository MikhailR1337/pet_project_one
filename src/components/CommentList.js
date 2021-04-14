import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

/* eslint-disable jsx-a11y/anchor-is-valid */

export const CommentList = ({ comments = [], isOpen }) => {
    // Задаем state через хук useState
    const [isOpenComment, setOpenComment] = useState(false);

    // Меняем состояние true/false
    const OpenCommentHandler = () => {
        setOpenComment(!isOpenComment);
    }

    // Закрываем комментарии, если статья закрыта с помощью хука useEffect
    useEffect(() => {
        if (!isOpen) {
            setOpenComment(false);
        };
    }, [isOpen])

    // Меняем icon в зависимости от isOpenComment
    const toggleIconImage = isOpenComment ? "speaker_notes_off": "speaker_notes";
    // Меняем text btn в зависимости от isOpenComment
    const toggleButtonText = isOpenComment ? "Закрыть комментарии": "Показать комментарии";

    // Генерируем кнопку с нужными стилями и наполнением
    const getButton = () => {
        return (
            <a className="waves-effect waves-light btn-small mb-1" onClick={OpenCommentHandler}>
                <i className="material-icons right">{toggleIconImage}</i>
                {toggleButtonText}
            </a>
        )
    }

    // Получаем комментарии в зависимости от их наличия, либо возвращаем блок, с текстом, об их отсутствии 
    const getComments = () => {
        if (comments.length) {
            return (
                <>
                    {getButton()}
                    <CSSTransition in={isOpenComment} timeout={500} classNames="comment">
                    <ul className="collection">
                        {isOpenComment && comments.map((id) => <Comment id={id} key={id} />)}
                    </ul>
                    </CSSTransition>
                </>
            )
        }
        return (
            <>
                <div className="card-panel teal deep-purple lighten-3">Комментариев пока нет</div>
            </>
        );
    }

    // возвращаем итоговый результат!
    return (
        <>
            {getComments()}
        </>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool
}
