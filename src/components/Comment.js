import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}.isRequired
