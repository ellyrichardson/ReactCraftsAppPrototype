import React, { Component } from 'react';

class PostItems extends Component {
    render() {
      // lists every projects
      return (
        <li className="post-items">
          <strong>{this.props.post.post_title}</strong>
          <br/>
          {this.props.post.post_content}
          <br/>
          <br/>
        </li>
      );
    }
  }
  
export default PostItems;