import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.getResults = this.getResults.bind(this);
    this.state = { 
      results : [], // Results from search
      loading: false, // Are we still loading the previous results?
      searched: false // Are we actually even searching (any words in input)?
    };
  }
  getResults(e) {
    if( this.state.loading ) {
      return;
    }
    
  }
  render() {
    return (
     <div className="search-form-input">
         <input className="search-input" type="text" onKeyUp={this.getResults} />
     </div>
    )
  }
}