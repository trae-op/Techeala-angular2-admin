
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
  getHome(url) {
    this.app.get(url, (req, res, next) => {
      db.home.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.home({
              slides: []
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

  addSlide(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.home.find()
        .then(doc => {

          doc[0].slides.push({
            name: body.name,
            image: body.image
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.slides }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },


  editSlide(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.home.find()
        .then(doc => {

          let slides = doc[0].slides;

          if (!globalMethods.checkId(body.id, res)) return;

          let slide = _.find(slides, slide => slide.id === body.id);

          slide.name = body.name || '';
          slide.image = body.image || '';

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.slides }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },


  deleteSlide(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.home.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateSlides = doc[0].slides.filter(slide => slide.id != body.id);

          doc[0].slides = updateSlides;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.slides }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};