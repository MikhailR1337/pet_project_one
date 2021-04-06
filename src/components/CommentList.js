import React, { useState } from 'react';
import { Comment } from './Comment';

/* eslint-disable jsx-a11y/anchor-is-valid */

export const CommentList = ({ comments }) => {
    // Задаем state через хук
    const [isOpenComment, setOpenComment] = useState(false);

    // Меняем состояние true/false
    const OpenCommentHandler = () => {
        setOpenComment(!isOpenComment)
        console.log(isOpenComment)
    }


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

    // Получаем комментарии в зависимости от их наличия
    const getComments = () => comments 
    ? comments.map((comment) => <Comment comment={comment} key={comment.id} />)
    : <div className="card-panel teal deep-purple lighten-3">Комментариев пока нет</div>;

    return (
        <>
            {getButton()}
            <ul className="collection">
                {isOpenComment && getComments()}
            </ul>
        </>
    )
}
