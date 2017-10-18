
const express = require('express');
const app = express();

const mainMenu = require('./mainMenu');
const home = require('./home');
const about = require('./about');
const portfolio = require('./portfolio');
const technologies = require('./technologies');
const vacancies = require('./vacancies');
const faq = require('./faq');
const contacts = require('./contacts');

/* GET api listing. */
app.get('/', (req, res) => {
  res.send('api works');
});

mainMenu
  .init( _this =>_this.app = app)
  .getMainMenu('/get/mainMenu');

home
  .init( _this =>_this.app = app)
  .getHome('/get/home')
  .addSlide('/add/slideHome')
  .editSlide('/edit/slideHome')
  .deleteSlide('/delete/slideHome');

about
  .init( _this =>_this.app = app)
  .editDescription('/edit/description')
  .getAbout('/get/about')
  .addTeamPhoto('/add/teamPhoto')
  .editTeamPhoto('/edit/teamPhoto')
  .deleteTeamPhoto('/delete/teamPhoto');

portfolio
  .init( _this =>_this.app = app)
  .getPortfolio('/get/projects')
  .addProject('/add/project')
  .editProject('/edit/project')
  .deleteProject('/delete/project');

technologies
  .init( _this =>_this.app = app)
  .getTechnologies('/get/technologies')
  .addTechnology('/add/technology')
  .editTechnology('/edit/technology')
  .deleteTechnology('/delete/technology');

vacancies
  .init( _this =>_this.app = app)
  .getVacancies('/get/vacancies')
  .addVacancy('/add/vacancy')
  .editVacancy('/edit/vacancy')
  .deleteVacancy('/delete/vacancy');

faq
  .init( _this =>_this.app = app)
  .getFaq('/get/faq')
  .addFaq('/add/faq')
  .editFaq('/edit/faq')
  .deleteFaq('/delete/faq');

contacts
  .init( _this =>_this.app = app)
  .editMapCoordinates('/edit/mapCoordinates')
  .getContacts('/get/contacts')
  .addContact('/add/contact')
  .editContact('/edit/contact')
  .deleteContact('/delete/contact');

module.exports = app;

