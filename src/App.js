import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Maps from './components/maps';
import News from './components/news';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/slide01.png';
import Container from '@material-ui/core/Container';
import GoogleFontLoader from 'react-google-font-loader';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Divider from '@material-ui/core/Divider';

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
          <ListItem button key={text} component={Link} to ="/home">
            <ListItemIcon>{ <HomeIcon />}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['About'].map((text, index) => (
          <ListItem button key={text} component={Link} to ="/about" >
            <ListItemIcon >{ <PublicIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/home'}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['News'].map((text, index) => (
          <ListItem button key={text} component={Link} to ="/news" >
          <ListItemIcon>{ <NewReleasesIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/news'}/>
            <Link ></Link>
          </ListItem>
        ))}
      </List>
      <List>
        {['Maps'].map((text, index) => (
          <ListItem button key={text} component={Link} to ="/maps" >
          <ListItemIcon>{<MapIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/maps'} />
          </ListItem>
        ))}
      </List>
      {/* ideally we should have a satellite tab for when our satellite images work 
      <List>
        {['Satellite'].map((text, index) => (
          <ListItem button key={text} component={Link} to ="/maps" >
          <ListItemIcon>{<MapIcon />}</ListItemIcon>
            <ListItemText primary={text} onClick={'./components/maps'} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "100%",
    backgroundSize: 'cover',
  };

  return (
      <Container maxWidth="100%" style={{background: `url(${Background})`, height: '100vh' }}>
          <GoogleFontLoader
      fonts={[
        {
          font: 'Lato',
          weights: [400, '400i'],
        },
        {
          font: 'Lato',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}/>
      <h2 style={{color: "white", fontFamily: 'Lato, sans-serif' }}>Satellite Raspberry</h2>
          
          <Button style={{color: "white", float: 'right'}} onClick={toggleDrawer('right', true)}><p style={{fontFamily: 'Lato, sans-serif'}}>Menu</p></Button>
          <Router>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
           {sideList('right')}
          </Drawer>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/maps' component={Maps} />
              <Route path='/about' component={About} />
              <Route path='/news' component={News} />
          </Switch>
          </Router>
          </Container>
   );
}

export default App;
