// reference to making http calls: 
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
// https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be
import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "world"
    };
  }

  handleClick(stateval) {
    // makes an API call to the getNews function 
    // this.setState({v})
    axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-cs121-1569887619031.cloudfunctions.net/getNews',
    {
      params: {
      "newsItem": stateval
      }
    })
    .then(response=> console.log(response))
  }
  
  render() {
    return (
        <div>
          <h2>News</h2>
          <MuiThemeProvider>
          <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({value: newValue})}
            onRequestSearch={() => this.handleClick(this.state.value)}
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