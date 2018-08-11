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
          type="text" role="search" 
          placeholder="Search for a museum!" 
          value={this.props.query} 
          onChange={(event) => this.props.updateQuery(event.target.value)}/>

          <div id="results" role="region">
            <ul id = "ulList">
              {showingMuseums.map((museum) => (
                <li key={museum.title}>
                    <a tabIndex="0" 
                        key={museum.link} 
                        onClick={(event) => this.props.highlightMuseum(event.target.innerHTML)}
                        onKeyDown={(event) => event.keyCode===13 ? this.props.highlightMuseum(event.target.innerHTML) : null}>
                            {museum.title}
                    </a>
                </li>
              ))}                   
            </ul>
          </div>
        </div>
      )
    }
}

export default Search;