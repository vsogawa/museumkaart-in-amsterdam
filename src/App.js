import React, { Component } from 'react';
import './App.css';
import SimpleMap from './map.js';
import ReactDOM from 'react-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class App extends Component {
    state = {
        markers: []
    }


  render() {
    return (
      <SimpleMap/>
    );
  }
}

export default App;
