import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class News extends Component {
  render() {
    return (
        <div>
          <h2>News</h2>
          <MuiThemeProvider>

          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
            margin: '0 auto',
            maxWidth: 800
      }}
    />
        </MuiThemeProvider>

       </div>
    );
  }
}

export default News;