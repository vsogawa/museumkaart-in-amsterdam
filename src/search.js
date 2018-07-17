import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Search extends Component {
    state = {
    }

  render() {
    return (
      `<h1 style={{ height: '400px', width: '400px', background-color: "blue" }}>TEST SEARCH BAR</h1>`
    );
  }
}

export default Search;