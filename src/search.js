import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Search extends Component {
    state = {
    }

  render() {
    return (
      <h1 style={{ height: '100%', width: '100%', z-index: 3, background-color: "blue" }}>TEST SEARCH BAR</h1>
    );
  }
}

export default Search;