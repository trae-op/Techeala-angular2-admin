


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
  getFaq(url) {
    this.app.get(url, (req, res, next) => {
      db.faq.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.faq({
              faq: []
            });
            collection.save().then(data => res.json([data][0].faq)).catch(err => next(err));
          } else {
            res.json(doc[0].faq)
          }

        })
        .catch(err => next(err))
    });

    return this;
  },
  addFaq(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.faq.find()
        .then(doc => {

          doc[0].faq.push({
            question: body.question,
            answer: body.answer
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.faq }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },
  editFaq(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.faq.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let faq = _.find(doc[0].faq, faq => faq.id === body.id);

          faq.question = body.question || '';
          faq.answer = body.answer || '';

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.faq }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },
  deleteFaq(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.faq.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateFaq = doc[0].faq.filter(faq => faq.id != body.id);

          doc[0].faq = updateFaq;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.faq }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};