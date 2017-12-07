import React, { Component } from 'react';
import Likes from '../PostContainer/Likes';
export default class PostContainerHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            thumbnailUrl: props.thumbnailUrl,
            comment: props.comment,
            timestamp: props.timestamp,
            likes: props.likes
        }
    }
    render() {
        return(<div className="PostContainer__Header">
            <div className="PostContainer__Thumbnail--small">
                <img src={this.props.thumbnailUrl} alt={this.props.username}/>
            </div>
            <div className="PostContainer__Title--small">
            {this.props.username}
            </div>
            <Likes likes={this.props.likes} />
            <div className="PostContainer__Timestamp--small">
            {this.props.timestamp}
            </div>
        </div>)
    }
}