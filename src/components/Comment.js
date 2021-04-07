import React from 'react';

export const Comment = ({ comment }) => {

    return (
        <li className="collection-item avatar">
            <i className="material-icons circle green">insert_chart</i>
            <span className="title">{comment.user}</span>
            <p>{comment.text}</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    )
}