import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import ReactDOM from 'react-dom';
import sortBy from 'sort-by';


class Search extends Component {    
    state = {
        query: ''
    }
    
updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

  render () {

      const museums = this.props.museumList
      
      let showingMuseums
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingMuseums = museums.filter(museum=>match.test(museum.title))
        }
        else {
            showingMuseums = this.props.museumList    
        }
        
        showingMuseums.sort(sortBy('title'))

      return (
        <div id="menu">
          <input id = "searchtext" 
          type="text" 
          placeholder="Search for a museum!" 
          value={this.state.query} 
          onChange={(event) => this.updateQuery(event.target.value)}/>

          <div id="results">
            <ul id = "ulList">
              {showingMuseums.map((museum) => (
                <li key={museum.name}><a target="_blank" href={museum.link}>{museum.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
}

export default Search;