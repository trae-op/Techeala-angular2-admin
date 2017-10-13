

// module to helping for work mongoDB
const mongoose = require('mongoose');
const colors = require('colors');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

//var db = mongoose.connection;              
db.on('error', console.error);

db.once('open', () => console.log(colors.green('Connected to DB :◅-)')));

mongoose.connect('mongodb://localhost/techeala', {
  useMongoClient: true
});

// schemes of model
var allSchema = mongoose.Schema({
  page: String, 
  link: String, 
  dataPage: {
    slides: [{
      name: String,
      image: String
    }],
    description: String,
    teamGallery: [{
      name: String,
      image: String
    }],
    projects: [{
      image: String,
      link: String,
      description: String
    }],
    technologies: [String],
    vacancies: [{
      title: String,
      description: String,
      detail: String
    }],
    faq: [{
      question: String,
      answer: String
    }],
    skype: String,
    phone: String,
    email: String,
    mapCoordinates: [{
      lat: Number,
      lng: Number
    }]
  }
});

var mainSchema = mongoose.Schema({
  hasData: Boolean,
  allData: [allSchema]
});

// DataBase
var Techeala = mongoose.model('Techeala', mainSchema);


Techeala.find({ hasData: true }).then( page => {
    if (!page[0]) {
      var defaultData = new Techeala({
        hasData: true,
        allData: [
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
        ]
      });


      defaultData.save()
      .then( () => console.log(colors.green('===> Successful request for default data!!! <===')))
      .catch(err => console.log(colors.red('Fail request for default data!!!') + '\n', err));

    }

}).catch(err => console.log(colors.red('===>>> fail search!!! <<<===') + '\n', err));


exports.DataBase = { 
  modelData: Techeala
};