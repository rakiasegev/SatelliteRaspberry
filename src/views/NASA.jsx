import React from "react";
import Axios from 'axios';
import AstronomyCard from './AstronomyCard'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


class NASA extends React.Component {
  constructor(){
    super();

    this.state = {
      astronomy: []
    }
  }

  // API query call for NASA satellite image of the day
  componentDidMount(){
    const API_KEY= 'jCHY58Z54qcMoQUsLs6bi7mvF7FKbnJjvreVfVwt'
    const END_POINT='https://api.nasa.gov/planetary/apod?api_key='

    Axios.get(END_POINT+API_KEY)
    .then(response => {

      this.setState({
        astronomy: response.data
      })
      console.log(this.state.astronomy)
    })
    .catch(error => {
      console.log(error, 'failed to fetch data')
    });
  }

  render() {
    const {astronomy} = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>NASA Satellite Image of the Day</CardHeader>
                
                <CardBody>
                  <AstronomyCard data={astronomy}/>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NASA;
