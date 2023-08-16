// Article.js

import React, { useState } from 'react';
import Comment from './Comment';

const Article = ({ article }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentAdd = (comment) => {
    setComments([...comments, comment]);
  };

  const handleCommentDelete = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  return (
    <div className="article">
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.description}</p>
      {article.url && <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>}
      <button onClick={handleLike}>Like ({likes})</button>
      <Comment 
        comments={comments} 
        onCommentAdd={handleCommentAdd} 
        onCommentDelete={handleCommentDelete}
      />
    </div>
  );
};

export default Article;
