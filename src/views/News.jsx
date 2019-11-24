import React from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  Form,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";

class News extends React.Component {


  // state for search bar
  constructor(props){
    super(props);
    this.state = {
      value: "Enter City, Country"
    };
  }

  handleClick(stateval) {
    // makes an API call to the getNews function 
    // call a diff file, 
    // do all this analysis in a diff file 
   return( 
   axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-cs121-1569887619031.cloudfunctions.net/getNews',
    {
    params: {"newsItem": stateval}
    } 
    ).then(response=> {
      return response.data; 
    }))
  }

  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
            <CardHeader>
                  <CardTitle tag="h5">Enter a location to search</CardTitle>
                </CardHeader>
            <CardBody>
            <Form>
            <FormGroup 
            value={this.state.value}>
              <label htmlFor="city"></label>
                  <Input placeholder="City" type="city" />
                  
              </FormGroup>
            <Button
              className="btn-round"
              color="primary"
              type="submit"
              onChange={(newValue) => this.setState({value: newValue})}
              onRequestSearch={() => this.handleClick(this.state.value).then(data => {
                // var my_response = {data}
                document.write(data);
                // update the state and write 
              })}
            > Search </Button>
            </Form>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    );
  }
}

export default News;
