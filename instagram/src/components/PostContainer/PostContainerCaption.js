import React, { Component } from 'react';
export default class PostContainerCaption extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comment:props.comment
        }
    }
    render() {
        return(<div>{this.props.comment.username} Says :<br/> {this.props.comment.text}</div>)
    }
}