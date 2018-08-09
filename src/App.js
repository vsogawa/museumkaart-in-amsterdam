import React, { Component } from 'react';
import './App.css';
import SimpleMap from './map.js';
import ReactDOM from 'react-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class App extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query });
    }

  render() {
    return (
      <SimpleMap query={this.state.query} updateQuery={this.updateQuery}/>
    );
  }
}

export default App;
