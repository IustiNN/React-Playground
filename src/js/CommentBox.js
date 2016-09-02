import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  render() {
    return (
        <div className="commentBox">
        	<h1>Hello, world! I am a CsodsmmentBox.</h1>
        	<CommentList />

        	<CommentForm />
        </div>
      )
  }
}

export default CommentBox;