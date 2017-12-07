import React, { Component } from 'react';
export default class Likes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes
        }
    }
    render() {
        return(<div> Likes : <span className="Post__Likes">{this.props.likes}</span></div>)
    }
}