import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=${id}&apiKey=${API_KEY}`;
    
    axios.get(apiUrl)
      .then(response => {
        setArticle(response.data.articles[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

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

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <button onClick={handleLike}>Like ({likes})</button>
      <Comment 
        comments={comments} 
        onCommentAdd={handleCommentAdd} 
        onCommentDelete={handleCommentDelete}
      />
    </div>
  );
};

export default ArticleDetails;
