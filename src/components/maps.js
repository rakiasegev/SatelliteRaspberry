import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./maps.css";

// var ee = require('@google/earthengine');
// var privateKey = require('./privatekey.json');

// // Require client library and private key.
// var ee = require('@google/earthengine');
// var privateKey = require('./privatekey.json');

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

// // Run an Earth Engine script.
// var image = new ee.Image('srtm90_v4');
// image.getMap({min: 0, max: 1000}, function(map) {
//   console.log(map);
// });

class Maps extends React.Component {
  render() {
    return (
      <h2>Hi</h2>
    );
}
}
export default Maps;