import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle,CardFooter, Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Environmental Awareness in a Click</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>We utilize the massive quantity of open-source satellite data to track and analyze quantitatively how natural stuctures have changed over time. 
								Through image analysis and machine learning platforms we analyze this and present it for you to explore. 
								You can look at specific locations and through Satellite Raspberry track deforestation, climate change effects, and fires.</p>
                <p> Awareness is the first step to change. This project seeks to help individuals and scientists make educated decisions on nature conservation efforts and first responder action. 
								This issue is of growing importance as the effects of climate change become more severe. We are here to help make a change.

								We utilize Google Earth Engine in order to be able to take satellite imagery, an algorithm or research topic, and learn more to make a difference.</p>
                <img
                    alt="..."
                    src={require("assets/img/ee.png")}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
          </>
    );
  }
}

export default About;
