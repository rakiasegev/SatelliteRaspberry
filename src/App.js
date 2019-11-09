import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Maps from './components/maps';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <div>
          <h2>Satellite Raspberry</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/maps'} className="nav-link">Maps</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/maps' component={Maps} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
   );
}

export default App;
