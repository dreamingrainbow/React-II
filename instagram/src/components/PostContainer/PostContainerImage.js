import React, { Component } from 'react';
export default class PostContainerImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:props.imageUrl
        }
    }
    render() {
        return(<div className="PostContainer__Image">
            <img src={this.props.imageUrl} alt=""/>
        </div>)
    }
}