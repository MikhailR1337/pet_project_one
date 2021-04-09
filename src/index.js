import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { articles } from './fixtures';

ReactDOM.render(
  <App articles={articles} />,
  document.getElementById('root')
);
