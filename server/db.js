

// module to helping for work mongoDB
const mongoose = require('mongoose');
//var colors = require('colors');

var db = mongoose.connection;              
db.on('error', console.error);

db.once('open', () => console.log('Connected to DB :◅-)'));

// name db: resume
//mongoose.connect('mongodb://app-resume:darkmanx1988@ds015942.mlab.com:15942/resume');

mongoose.connect('mongodb://localhost/techeala');

/*

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
*/


// schemes of model
var mainSchema = mongoose.Schema({
  page: String, 
  link: String, 
  dataPage: Object
});


exports.DataBase = { 
  modelData: mongoose.model('Techeala', mainSchema)
};