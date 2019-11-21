import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { fade } from '@material-ui/core/styles/colorManipulator';


class About extends Component {
  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="60%" style={{height: '100vh', padding: "2%" }}>
      <Container maxWidth="60%" style={{ backgroundColor: fade('#000',0.6), height: '60vh', padding: "2%" }}>
          <center>
            <h2 style={{color: "white"}}>Environmental Awareness in a Click</h2>
            </center>
							<p style={{color: "white"}}>We utilize the massive quantity of open-source satellite data to track and analyze quantitatively how natural stuctures have changed over time. 
								Through image analysis and machine learning platforms we analyze this and present it for you to explore. 
								You can look at specific locations and through Satellite Raspberry track deforestation, climate change effects, and fires.</p>

							<p style={{color: "white"}}>
								Awareness is the first step to change. This project seeks to help individuals and scientists make educated decisions on nature conservation efforts and first responder action. 
								This issue is of growing importance as the effects of climate change become more severe. We are here to help make a change.

								We also would like to reference the open source platforms we use in case you want to explore them: Earth Engine.
							</p> 
      </Container>
      </Container>
    </React.Fragment>
    );
  }
}

export default About;