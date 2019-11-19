import React, { Component } from 'react';
import {storage} from './firebaseConfig.js';

class Home extends Component {
  constructor () {
    super()
    this.state = {
     background: '',
    }
    
    this.getImage('slide01')
  }
  
  getImage (image) {
    let { state } = this
    storage.child(`${image}.png`).getDownloadURL().then((url) => {
      state[image] = url
      console.log(url)
      this.setState(state)
    }).catch((error) => {
       //Handle any errors
    })
  }   

  render() {
    return (
        <div>
              <div class="container">
                      <div class="row">
                          <header id="header" class="alt">
                          <img src={ this.state.slide01 } alt="" />
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