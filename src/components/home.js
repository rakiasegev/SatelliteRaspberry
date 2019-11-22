import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" style={{height: '100%' }}>
                          <header>
                              <p>Environmental Awareness in a Click</p>
                              <h2>Satellite Raspberry</h2>
                          </header>         
      </Container>
      </React.Fragment>
    );
  }
}

export default Home;