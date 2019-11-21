import { BrowserRouter as Router } from "react-router-dom";
import "./maps.css";
import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
//import YOUR_CLIENT_ID from '../process.env.YOUR_CLIENT_ID';


// getting coordinates, making API call to Google functions 
class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "Mumbai"
    };
  }

  handleClick(stateval) {
    // makes an API call to the getNews function 
    // this.setState({v})
    axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-cs121-1569887619031.cloudfunctions.net/getCoordinates',
    {
      params: {
      "search": stateval
      }
    })
    // prints response to console 
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
export default Maps;

// // use of private key authentication is insecure? 
// var ee = require('@google/earthengine');
// var privateKey = require('../privatekey.json');

// // Initialize client library and run analysis.
// var runAnalysis = function() {
//   ee.initialize(null, null, function() {
//     // ... run analysis ...
//   }, function(e) {
//     console.error('Initialization error: ' + e);
//   });
// };

// // Authenticate using a service account.
// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function(e) {
//   console.error('Authentication error: ' + e);
// });

// Load client library.
var ee = require('@google/earthengine');

// Initialize client library and run analysis.
var initialize = function() {
  ee.initialize(null, null, function() {
    // ... run analysis ...
  }, function(e) {
    console.error('Initialization error: ' + e);
  });
};

// Authenticate using an OAuth pop-up.
ee.data.authenticateViaOauth(process.env.YOUR_CLIENT_ID, initialize, function(e) {
  console.error('Authentication error: ' + e);
}, null, function() {
  ee.data.authenticateViaPopup(initialize);
});

// now we load image dataset and filter based on coordinates! 
// var image_coll = ee.ImageCollection("CSP/HM/GlobalHumanModification")
//   .filterBounds(ee.Geometry.Point(Maps.state));

