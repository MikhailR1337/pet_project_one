import React from 'react';
import ArticleList from './components/ArticleList';
import { Filter } from './components/filters/Filter';

const App = ({ articles }) => {
  return (
    <div className="container">
      <Filter articles={articles} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
