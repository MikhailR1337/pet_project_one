import React, { Component } from 'react';
import cn from 'classnames';

export class FormCommentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameText: '',
            commentText: ''
        }
    }

    textHandle = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitComment = (event) => {
        event.preventDefault();
    }

    render() {
        const { userNameText, commentText } = this.state;
        const userNameLabel = cn({
            "active": userNameText,
        });
        const commentTextLabel = cn({
            "active": commentText,
        });
        const userNameInput = cn("validate", {
            "valid": userNameText.length > 0,
            "invalid": userNameText.length >= 15
        });
        const commentTextInput = cn("materialize-textarea",{
            "valid": commentText.length >= 5,
            "invalid": commentText.length >= 30
        });

        return (
            <div className="row mt-1">
                <form className="col s12 amber lighten-5" onSubmit={this.submitComment}>
                    <div className="row">
                        <div className="input-field col s4">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="userName"
                            name="userNameText"
                            type="text"
                            className={userNameInput}
                            value={userNameText}
                            onChange={this.textHandle} />
                            <label htmlFor="userName" className={userNameLabel}>Введите имя</label>
                        </div>
                        <div className="input-field col s5">
                            <i class="material-icons prefix">comment</i>
                            <textarea id="comment"
                            name="commentText"
                            className={commentTextInput}
                            value={commentText}
                            onChange={this.textHandle} />
                            <label htmlFor="comment" className={commentTextLabel}>Введите комментарий</label>
                        </div>
                        <div className="input-field col s3 center-align">
                            <button class="btn waves-effect waves-light mt-1" type="submit" name="action">добавить
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}