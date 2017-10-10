

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// containing data of database
var Techeala = require('./server/db').DataBase.modelData;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




var defaultData = new Techeala([
  {
    "page": "Home",
    "link": "home",
    "dataPage": {
      "slides": [
        {
          "name": "slide1",
          "image": "images/img.jpg"
        },
        {
          "name": "slide2",
          "image": "images/img.jpg"
        }
      ]
    }
  },
  {
    "page": "About company",
    "link": "about",
    "dataPage": {      
      "description": "Our company is the best!",
      "teamGallery": [
        {
          "name": "photo1",
          "image": "images/img.jpg"
        },
        {
          "name": "photo2",
          "image": "images/img.jpg"
        }
      ]
    }
  },
  {
    "page": "Portfolio",
    "link": "portfolio",
    "dataPage": {
      "projects": [
        {
          "image": "images/img.jpg",
          "link": "google.com",
          "description": "Amasport also is very cool project!"
        }
      ]
    }
  },
  {
    "page": "Technologies",
    "link": "technologies",
    "dataPage": {
      "technologies": ["JavaScript", "Python", "html5", "Css3", "Angular.js"]
    }
  },
  {
    "page": "Vacancies",
    "link": "vacancies",
    "dataPage": {      
      "vacancies": [
        {
          "title": "Vacancy1",
          "description": "new Vacancy",
          "detail": "description Vacancy"
        }
      ]
    }
  },
  {
    "page": "Contacts",
    "link": "contacts",
    "dataPage": 
      {      
        "skype": "lesoft",
        "phone": "097-678-44-32",
        "email": "lesoft@gmail.com",
        "mapCoordinates": {
          "lat": -25.363,
          "lng": 131.044
        }
      }
  },
  {
    "page": "FAQ",
    "link": "faq",
    "dataPage": {      
      "faq": [
        {
          "question": "Who are you?",
          "answer": "I'm John Snow"

        }
      ]
    }
  }
]);





defaultData.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow!!!');
  }
});


console.log('BD --->>> ', defaultData)

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));