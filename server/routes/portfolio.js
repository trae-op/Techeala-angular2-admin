


const _ = require('lodash');
const colors = require('colors');
const messages = require('../shared/messages');
const globalMethods = require('../shared/methods');

// containing data of database
const db = require('../../server/db').DataBase;

module.exports = {
  init(callBack) {
    callBack(this);
    return this;
  },
  getPortfolio(url) {
    this.app.get(url, (req, res, next) => {
      db.portfolio.find()
        .then(doc => {
          if (!doc.length) {
            let collection = new db.portfolio({
              projects: []
            });
            collection.save().then(data => res.json([data][0])).catch(err => next(err));
          } else {
            res.json(doc[0])
          }

        })
        .catch(err => next(err))
    });

    return this;
  },

  addProject(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.portfolio.find()
        .then(doc => {

          doc[0].projects.push({
            image: body.image,
            link: body.link,
            description: body.description
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.projects }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },


  editProject(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.portfolio.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let project = _.find(doc[0].projects, project => project.id === body.id);

          project.image = body.image;
          project.link = body.link;
          project.description = body.description;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.projects }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },


  deleteProject(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.portfolio.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateProjects = doc[0].projects.filter(project => project.id != body.id);

          doc[0].projects = updateProjects;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.projects }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};