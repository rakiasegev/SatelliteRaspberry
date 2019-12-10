import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import sampledata from './sampledata.json';
import JSONPretty from 'react-json-pretty';

// API KEY, git ignored
var PLANET_API_KEY="1ec74f7f71ed4fbe800d73ba2d35cd9f"

var request = require("request");

// aPI call on the data set NOAA
var options = { method: 'GET',
url: 'http://api.planetos.com/v1/datasets/noaa_gfs_global_sflux_0.12d/variables',
qs: { apikey: PLANET_API_KEY },
};

// Log the API request returned JSON to the console
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

// class for displaying the JSON file
class Data extends React.Component {
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Placeholder Data</CardHeader>
                <CardBody>
                <p>Dataset noaa_ww3_global_1.25x1d</p>
                <JSONPretty id="json-pretty" data={sampledata}></JSONPretty>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Data;