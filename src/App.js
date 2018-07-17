import React, { Component } from 'react';
import './App.css';
import SimpleMap from './map.js';
import Search from './search.js';


class App extends Component {
    state = {
        markers: []
    }


  render() {
    return (
      <Search/>,
      <SimpleMap/>
    );
  }
}

export default App;
