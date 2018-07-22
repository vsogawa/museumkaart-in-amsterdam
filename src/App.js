import React, { Component } from 'react';
import './App.css';
import SimpleMap from './map.js';
import ReactDOM from 'react-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class App extends Component {
    state = {
        markers: [],
        query: ''
    }

    updateQuery = (query) => {
            this.setState({ query: query.trim() })
    }

  render() {
    return (
      <SimpleMap query={this.state.query} updateQuery={this.updateQuery}/>
    );
  }
}

export default App;
