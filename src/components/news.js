import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar'

class News extends Component {
  render() {
    return (
        <div>
          <h2>News</h2>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
            margin: '0 auto',
            maxWidth: 800
      }}
    />
       </div>
    );
  }
}

export default News;