import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';


//classes = makeStyles(theme => ({
  //root: {
    //padding: theme.spacing(3, 2),
  //},
//}))
class About extends Component {
  render() {
    return (
        <div>
        <Box m={3} bgcolor="background.paper">
        <Typography variant="h5" component="h3">
        <h2>About</h2>
								<p>Our Mission</p>
        </Typography>
        <Typography component="p">
        <h2>Environmental Awareness in a Click</h2>
							<p>We utilize the massive quantity of open-source satellite data to track and analyze quantitatively how natural stuctures have changed over time. 
								Through image analysis and machine learning platforms we analyze this and present it for you to explore. 
								You can look at specific locations and through Satellite Raspberry track deforestation, climate change effects, and fires.</p>

							<p>
								Awareness is the first step to change. This project seeks to help individuals and scientists make educated decisions on nature conservation efforts and first responder action. 
								This issue is of growing importance as the effects of climate change become more severe. We are here to help make a change.

								We also would like to reference the open source platforms we use in case you want to explore them: Earth Engine.
							</p>      </Typography>
      </Box>
      </div>  
    );
  }
}

export default About;