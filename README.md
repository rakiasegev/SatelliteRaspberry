# Raspberry
Our platform aims to promote environmental awareness. Users can query environmental news on specific locations, search environmental datasets, as well as see satellite imagery. 

Note: The satellite, data, and news tab displays are not fully implemented. 


## Quick start

Quick start options:

- Clone the repo: `git clone `.
- `npm install axios`
- `npm install react-responsive-carousel`
-`npm install ol`
- `npm install jquery`
- `npm install react-json-pretty`

- launch on local server 

Note: you will have to get your own API keys

## File Structure

Within the download you'll find the following directories and files:

```
├── README.md
├── jsconfig.json
├── package.json
├── public
|   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── routes.js
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Navbars
    │   │   └── DemoNavbar.jsx
    │   └── Sidebar
    │       └── Sidebar.jsx
    ├── layouts
    │   └── Admin.jsx
    ├── variables
    │   └── icons.jsx
    ├── views
    │   ├── About.jsx
    │   ├── AstronomyCard.js
    │   ├── Dashboard.jsx
    │   ├── Data.jsx
    │   ├── NASA.jsx
    │   ├── News.jsx
    │   ├── sampledata.json
    │   ├── Satellite.jsx
    │   ├── Tables.jsx
    └── assets
        ├── css
        │   ├── paper-dashboard.css
        │   ├── paper-dashboard.css.map
        │   └── paper-dashboard.min.css
        ├── demo
        ├── fonts
        ├── img
        └── scss
            ├── paper-dashboard
            │   ├── cards
            │   ├── mixins
            │   ├── plugins
            │   └── react
            │       ├── custom
            │       └── react-differences.scss
            └── paper-dashboard.scss
```

# How to use: 
When navigating the website, you can 

- look at the dashboard of environmental facts
- see the NASA satellite image of the day and description
- query environmental news in a location
- see a sample of JSON data gotten from the api query on datasets

# Built With
- React JS
- Google Cloud Functions
- NASA satellite API
- Creative Tim UI

# Contributing
When submitting pull requests, please state clearly what changes were made, and what purpose they serve. 

# Authors
Rakia Segev, Shivam Malpani, Anisha Tandon 

# License
This project is licensed under the MIT License

# Acknowledgments
We used NASA satellite API and Google Cloud Functions. Our UI was adapted from a template from Creative Tim. We would like to thank Prof. Colleen Lewis for her guidance and support. 
