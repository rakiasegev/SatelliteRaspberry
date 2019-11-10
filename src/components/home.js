import React, { Component } from 'react';
import background from 'slide01.png';

class Home extends Component {
  render() {
    return (
        <div>
          <img src={background}/>
                <div class="container">
                        <div class="row">
                            <header id="header" class="alt">
                              <div class="logo"><a href="/">Raspberry </a></div>
                            </header>            
                            <header>
                                <p>Environmental Awareness in a Click</p>
                                <h2>Satellite Raspberry</h2>
                            </header>          </div>
                        </div>
                      </div>
    );
  }
}

export default Home;