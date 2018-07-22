import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
