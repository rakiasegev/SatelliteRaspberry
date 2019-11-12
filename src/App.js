import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Maps from './components/maps';
import News from './components/news';
import Background from './images/slide01.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Material UI imports for side menu
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import SatelliteIcon from '@material-ui/icons/Satellite';
import PublicIcon from '@material-ui/icons/Public';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

function App() {
  // styling for sidebar
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  const classes = useStyles();

  // state for it toggle is on or off
  const [state, setState] = React.useState({
    right: false,
  });

  // toggle drawer definition
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  // specificications of content in sideList menu
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
     <List>
        {['Home'].map((text, index) => (
          <ListItem button key={text} href="/home">
            <ListItemIcon>{ <HomeIcon />}</ListItemIcon>
            <ListItemText primary={text}/>
            <Link ></Link>
          </ListItem>
        ))}
      </List>
      <List>
        {['About'].map((text, index) => (
          <ListItem button key={text} href="/about" >
            <ListItemIcon >{ <PublicIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/home'}/>
            <Link ></Link>
          </ListItem>
        ))}
      </List>
      <List>
        {['News'].map((text, index) => (
          <ListItem button key={text} href="/about" >
            <ListItemIcon>{ <NewReleasesIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/news'}/>
            <Link ></Link>
          </ListItem>
        ))}
      </List>
      <List>
        {['Maps', 'Satellite'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MapIcon /> : <SatelliteIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  var sectionStyle = {
    backgroundImage: `url(${Background})`
  };

  return (
    <Router>
        <div>
        <section style={ sectionStyle }>
        <h2>Satellite Raspberry</h2>
          <Button onClick={toggleDrawer('right', true)}>Menu</Button>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
           {sideList('right')}
          </Drawer>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link className="nav-link">Maps</Link></li>
            <li><Link to={'/news'} className="nav-link">News</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/maps' component={Maps} />
              <Route path='/about' component={About} />
              <Route path='/news' component={News} />
          </Switch>
                  </section>
                  </div>
      </Router>
   );
}

export default App;
