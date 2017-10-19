
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
  getVacancies(url) {
    this.app.get(url, (req, res, next) => {
      db.vacancies.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.vacancies({
              vacancies: []
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
  addVacancy(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.vacancies.find()
        .then(doc => {

          doc[0].vacancies.push({
            title: body.title,
            description: body.description,
            detail: body.detail
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.vacancies }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },
  editVacancy(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.vacancies.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let vacancy = _.find(doc[0].vacancies, vacancy => vacancy.id === body.id);

          vacancy.title = body.title;
          vacancy.description = body.description;
          vacancy.detail = body.detail;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.vacancies }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },
  deleteVacancy(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.vacancies.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateVacancy = doc[0].vacancies.filter(vacancy => vacancy.id != body.id);

          doc[0].vacancies = updateVacancy;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.vacancies }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};