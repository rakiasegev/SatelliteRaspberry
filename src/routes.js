import Dashboard from "views/Dashboard.jsx";
import News from "views/News.jsx";
import About from "views/About.jsx";
// import Maps from "views/Map.jsx";
import Satellite from "views/Satellite.jsx"; 

import NASA from "views/NASA.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-globe",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-alert-circle-i",
    component: About,
    layout: "/admin"
  },
  {
    path: "/NASA",
    name: "NASA Satellite",
    icon: "nc-icon nc-pin-3",
    component: NASA,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News",
    icon: "nc-icon nc-bell-55",
    component: News,
    layout: "/admin"
  },
  {
    path:"/satellite", 
    name: "Satellite", 
    component: Satellite, 
    layout: "/admin"
  }
];
export default routes;
