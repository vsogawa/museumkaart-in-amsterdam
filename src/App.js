import React, { Component } from 'react';
import './App.css';
import SimpleMap from './map.js';

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
