
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
  getTechnologies(url) {
    this.app.get(url, (req, res, next) => {
      db.technologies.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.technologies({
              technologies: []
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
  addTechnology(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.technologies.find()
        .then(doc => {

          doc[0].technologies.push({
            name: body.name,
            image: body.image
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.technologies }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },
  editTechnology(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.technologies.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let technology = _.find(doc[0].technologies, technology => technology.id === body.id);

          technology.name = body.name || '';
          technology.image = body.image || '';

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.technologies }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },
  deleteTechnology(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.technologies.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateTechnology = doc[0].technologies.filter(technology => technology.id != body.id);

          doc[0].technologies = updateTechnology;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.technologies }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};