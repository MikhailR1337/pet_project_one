import React from 'react';
import { Provider } from 'react-redux';
import ArticleList from './components/ArticleList';
import { Filter } from './components/filters/Filter';
import { store } from './redux/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Filter />
        <ArticleList />
      </div>
    </Provider>
  );
}

export default App;
