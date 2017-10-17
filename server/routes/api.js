
const express = require('express');
const app = express();

const mainMenu = require('./mainMenu');
const slidesHome = require('./slidesHome');
const teamGallery = require('./teamGallery');
const projects = require('./projects');
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

slidesHome
  .init( _this =>_this.app = app)
  .getSlidesHome('/get/slidesHome')
  .addSlide('/add/slide')
  .editSlide('/edit/slide')
  .deleteSlide('/delete/slide');

teamGallery
  .init( _this =>_this.app = app)
  .getTeamGallery('/get/teamGallery')
  .addTeamPhoto('/add/teamPhoto')
  .editTeamPhoto('/edit/teamPhoto')
  .deleteTeamPhoto('/delete/teamPhoto');

projects
  .init( _this =>_this.app = app)
  .getProjects('/get/projects')
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

