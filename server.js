

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const colors = require('colors');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// containing data of database
var db = require('./server/db').DataBase;



app.post('/addSlide', function(req, res, next) {
  //var body = req.body;

  db.modelData.find()
    .then(doc => {

      doc[0].allData[0].dataPage.slides.push({
        name: "new slide",
        image: "images/new-img.jpg"
      });

      doc[0]
        .save().then(data => res.json(data))
        .catch(err => next(err));
      
    })
    .catch(err => next(err))

});




// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//console.log('BD --->>> ', defaultData.allData[0])

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
server.listen(port, () => console.log(colors.blue(`API running on localhost:${port}`)));