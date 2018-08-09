import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import ReactDOM from 'react-dom';
import sortBy from 'sort-by';


class Search extends Component {    
    

  render () {

      const museums = this.props.museumList;
      
      let showingMuseums;
        if (this.props.query) {
            const match = new RegExp(escapeRegExp(this.props.query), 'i')
            showingMuseums = museums.filter(museum=>match.test(museum.title));
        }
        else {
            showingMuseums = this.props.museumList    
        }
        showingMuseums.sort(sortBy('title'));
        if (this.props.simpleMapDidMount) {
            this.props.renderSpecificMarkers(window.myMap, window.myMaps, showingMuseums);
        }

    
      return (
        <div id="menu">
          <input id = "searchtext" 
          type="text" 
          placeholder="Search for a museum!" 
          value={this.props.query} 
          onChange={(event) => this.props.updateQuery(event.target.value)}/>

          <div id="results">
            <ul id = "ulList">
              {showingMuseums.map((museum) => (
                <li key={museum.title}><a key={museum.link} onClick={(event) => this.props.highlightMuseum(event.target.innerHTML)}>{museum.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
}

export default Search;