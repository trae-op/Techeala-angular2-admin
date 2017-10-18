

// module to helping for work mongoDB
const mongoose = require('mongoose');
const colors = require('colors');
const messages = require('./shared/messages');

mongoose.Promise = global.Promise;

let db = mongoose.connection;
             
db.on('error', console.error);

db.once('open', () => console.log(colors.green(messages.db.connected)));

mongoose.connect(messages.db.url, {
  useMongoClient: true
});


let mainMenuSchema = mongoose.Schema({
  menu: [{
    page: String,
    link: String
  }]
});

let homeSchema = mongoose.Schema({
  slides: [{
    name: String,
    image: String
  }]
});

let aboutSchema = mongoose.Schema({
  description: String,
  gallery: [{
    name: String,
    image: String
  }]
});

let portfolioSchema = mongoose.Schema({
  projects: [{
    image: String,
    link: String,
    description: String
  }]
});

let technologiesSchema = mongoose.Schema({
  technologies: [{
    name: String,
    image: String
  }]
});

let vacanciesSchema = mongoose.Schema({
  vacancies: [{
    title: String,
    description: String,
    detail: String
  }]
});

let contactsSchema = mongoose.Schema({
  contacts: [
    {
      name: String,
      icon: String,
      link: String
    }
  ],
  mapCoordinates: [{
    lat: Number,
    lng: Number
  }]
});

let faqSchema = mongoose.Schema({
  faq: [{
    question: String,
    answer: String
  }]
});


exports.DataBase = {
  mainMenu: mongoose.model('MainMenu', mainMenuSchema),
  home: mongoose.model('Home', homeSchema),
  about: mongoose.model('About', aboutSchema),
  portfolio: mongoose.model('Portfolio', portfolioSchema),
  technologies: mongoose.model('Technologies', technologiesSchema),
  vacancies: mongoose.model('Vacancies', vacanciesSchema),
  contacts: mongoose.model('Contacts', contactsSchema),
  faq: mongoose.model('Faq', faqSchema)
};

