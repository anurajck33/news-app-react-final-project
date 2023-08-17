# REACT-PROJECT: NEWS APPLICATION

## Abstract

The provided code comprises a React news application that enables users to view and interact with news articles. The application uses React Router for navigation and Axios for making API requests to retrieve news data. It features a modular component structure, including functionalities for displaying articles, liking articles, adding and deleting comments, and navigating through pages. The application provides a user-friendly interface to browse news articles, read details, and engage with content through comments and likes.

## Code Explanation:

### App.js:

The main entry point of the application.

Configures routing using React Router, with two main routes: NewsList and ArticleDetails.

Renders a header and dynamically renders the appropriate component based on the route.

### Article.js:

Represents an individual news article.

Displays article title, image, description, link, and like button.

Manages likes and comments for each article using state.

Allows users to like an article and add/delete comments.

## ArticleDetails.js:

Displays detailed information about a specific article.

Uses URL parameters to fetch article data from an API.

Manages likes and comments similar to the Article component.

Provides a "Back" button to navigate back to the article list.

## CategoryDropdown.js:

A dropdown component to select news categories (General, Sports, Entertainment).

Calls the parent component's callback function when a category is selected.

## Comment.js:

Manages comments for an article.

Allows users to input and submit comments, and delete existing comments.

Keeps track of comments using state and maps them to UI elements.

## Header.js:

Displays a navigation header with links to Home, Favorites, and a search input.

Allows users to input a search query and navigate to search results.

## NewsList.js:

Displays a list of news articles.

Fetches articles based on the selected category using an API call.

Uses the Article component to render each article.

Implements pagination to navigate through pages of articles.

## Pagination.js:

Displays pagination buttons for navigating between pages.

Calls a callback function when a page is clicked.

Highlights the current page for better user feedback.

## Styles.css:

Contains CSS styles for various components and layout of the application.

Defines styles for headers, navigation, articles, comments, and pagination.

## .env.local:

Configuration file for environment variables.

Uses a placeholder for the API key, which should be replaced with an actual API key.



The React news application uses a modular and component-based architecture to provide a user-friendly interface for browsing and interacting with news articles. It showcases various React concepts such as routing, state management, component communication, and API integration. The code demonstrates a functional foundation for building and expanding a news-related web application.


## Wireframe: 
The sample wireframe for the project is available at: [NewsApp-Wireframe](https://drive.google.com/drive/u/3/folders/1lY9cMKXUVQpD6zzsBzVuDtKng_fqzQrF)

## Screenshots of the News Application: 
[NewsApp-Screenshots](https://drive.google.com/drive/u/3/folders/19OSW_su9jTjIw_JFQCVTct3BZbImAsxS)
