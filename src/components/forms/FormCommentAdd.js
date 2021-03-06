import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { addComment } from '../../redux/actionCreaters/actionCreaters';

class FormCommentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameText: '',
            commentText: ''
        }
    }

    // Универсальный метод для value всех инпутов
    textHandle = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // отключаем перезагрузку при нажатии на кнопку
    submitComment = (event) => {
        event.preventDefault();
        const { addComment, articleId } = this.props;
        const { userNameText, commentText } = this.state;
        addComment({user: userNameText, text: commentText } , articleId);
        this.setState({
            userNameText: '',
            commentText: ''
        })
    }

    render() {
        const { userNameText, commentText } = this.state;
        const { userNameRange, commentTextRange } = validateRange;
        
        // прописываем классы с помощью библиотеки classnames
        const userNameLabel = cn({
            "active": userNameText,
        });
        const commentTextLabel = cn({
            "active": commentText,
        });
        const userNameInput = cn("validate", {
            "valid": userNameText.length >= userNameRange.min,
            "invalid": userNameText.length > userNameRange.max
        });
        const commentTextInput = cn("materialize-textarea",{
            "valid": commentText.length >= commentTextRange.min,
            "invalid": commentText.length > commentTextRange.max
        });

        const submitButton = cn("btn waves-effect waves-light mt-1",{
            "disabled": 
            (commentText.length < commentTextRange.min || commentText.length > commentTextRange.max) ||
            (userNameText.length < userNameRange.min || userNameText.length > userNameRange.max)
        });

        return (
            <div className="row mt-1">
                <form className="col s12 amber lighten-5" onSubmit={this.submitComment}>
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="userName"
                            name="userNameText"
                            type="text"
                            className={userNameInput}
                            value={userNameText}
                            onChange={this.textHandle} />
                            <label htmlFor="userName" className={userNameLabel}>Введите имя</label>
                        </div>
                        <div className="input-field col s5">
                            <i className="material-icons prefix">comment</i>
                            <textarea id="comment"
                            name="commentText"
                            className={commentTextInput}
                            value={commentText}
                            onChange={this.textHandle} />
                            <label htmlFor="comment" className={commentTextLabel}>Введите комментарий</label>
                        </div>
                        <div className="input-field col s3 center-align">
                            <button className={submitButton} type="submit" name="action">добавить
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// Диапазон для количества символов в инпутах
const validateRange = {
    userNameRange: {
        min: 1,
        max: 15
    },
    commentTextRange: {
        min: 5,
        max: 30
    }
}

// прокидываю в this.props addComment
export default connect(null, { addComment })(FormCommentAdd);