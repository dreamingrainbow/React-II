import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../PostContainer/PostContainer.css';
import PostContainerHeader from '../PostContainer/PostContainerHeader';
import PostContainerImage from '../PostContainer/PostContainerImage';
import PostContainerCaption from '../PostContainer/PostContainerCaption';

export default class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            post:props.post
        }
    }

    render() {
        return(
            <div className="PostContainer">
                <PostContainerHeader likes={this.props.post.likes} username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} timestamp={this.props.post.timestamp}/>
                <PostContainerImage imageUrl={this.props.post.imageUrl} />
                <PostContainerCaption comment={this.props.post.comments.shift()} />                
                <CommentSection comments={this.state.post.comments}/>
            </div>
        );
    }
}