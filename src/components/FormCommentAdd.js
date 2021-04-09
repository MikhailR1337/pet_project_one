import React, { Component } from 'react';

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
        this.toggleActiveLabelUser = userNameText ? "active": "";
        this.toggleActiveLabelComment = commentText ? "active": "";
        return (
            <div className="row mt-1">
                <form className="col s12 amber lighten-5" onSubmit={this.submitComment}>
                    <div className="row">
                        <div className="input-field col s4">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="userName"
                            name="userNameText"
                            type="text"
                            className="validate"
                            value={userNameText}
                            onChange={this.textHandle} />
                            <label htmlFor="userName" className={this.toggleActiveLabelUser}>Введите имя</label>
                        </div>
                        <div className="input-field col s5">
                            <i class="material-icons prefix">comment</i>
                            <textarea id="comment"
                            name="commentText"
                            className="materialize-textarea"
                            value={commentText}
                            onChange={this.textHandle} />
                            <label htmlFor="comment" className={this.toggleActiveLabelComment}>Введите комментарий</label>
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