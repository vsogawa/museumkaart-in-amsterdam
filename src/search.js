import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class Search extends Component {    
    state = {
        query: ''
    }
    

  render() {
     let museums = this.props.museumList
     let listMuseums = "";
    for (let i = 0; i< museums.length; i++) {
        listMuseums += `<div><li>${museums[i].title}</li></div>`;
    }
      
    return (
      <div id="menu">
        <input id="searchtext" type="text" placeholder="Search for a Museum!"/>
            <div id="results">
                <ul>{listMuseums}</ul>
            </div>
        </div>
    );
  }
}

export default Search;