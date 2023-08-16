import React, { useState } from 'react';

const Comment = ({ comments, onCommentAdd, onCommentDelete }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    onCommentAdd(newComment);
    setNewComment('');
  };

  const handleCommentDelete = (index) => {
    onCommentDelete(index);
  };

  return (
    <div>
      <div>
        <input type="text" value={newComment} onChange={handleCommentChange} />
        <button onClick={handleCommentSubmit}>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleCommentDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
