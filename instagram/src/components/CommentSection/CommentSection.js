import React, { Component } from 'react';

export default class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[],
            newComment:''
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments || []
        });
    }

    addComment = (e) => {
        e.preventDefault();
        const commentObj = {
            username: 'Michael',
            text: this.state.newComment
        };
        this.setState({
            comments: [...this.state.comments, commentObj],
            newComment:''
        })
    }

    handleCommentInput = (e) => {
        this.setState({ newComment: e.target.value });
    }

    render() {
        return (
            <div>
                {this.state.comments ? this.state.comments.map((comment, i ) => (
                    <div key={i}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                    </div>
                )) : null}
                <input type="text" value={this.state.newComment} onChange={this.handleCommentInput}/>
                <button onClick={this.addComment}>Submit</button>
            </div>
        );
    }
}
