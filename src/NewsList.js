import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Article from './Article';
import Pagination from './Pagination';
import CategoryDropdown from './CategoryDropdown'; 


const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const articlesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('general'); // Default category

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    // API URL based on the selected category
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`;

    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedCategory]);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      <div className="category-dropdown">
        <CategoryDropdown onSelectCategory={setSelectedCategory} />
      </div>
      <div className="news-list">
        {displayedArticles.map(article => (
          <Link to={`/article/${encodeURIComponent(article.title)}`} key={article.title}>
            <Article article={article} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / articlesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default NewsList;
