
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
  getTeamGallery(url) {
    this.app.get(url, (req, res, next) => {
      db.teamGallery.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.teamGallery({
              gallery: []
            });
            collection.save().then(data => res.json([data][0].gallery)).catch(err => next(err));
          } else {
            res.json(doc[0].gallery)
          }

        })
        .catch(err => next(err))
    });

    return this;
  },

  addTeamPhoto(url) {
    this.app.post(url, (req, res, next) => {
      db.teamGallery.find()
        .then(doc => {

          doc[0].gallery.push({
            name: "",
            image: ""
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.gallery }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },


  editTeamPhoto(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.teamGallery.find()
        .then(doc => {

          let gallery = doc[0].gallery;

          if (!globalMethods.checkId(body.id, res)) return;

          let teamPhoto = _.find(gallery, data => data.id === body.id);

          teamPhoto.name = body.name || '';
          teamPhoto.image = body.image || '';

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.gallery }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },


  deleteTeamPhoto(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.teamGallery.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateTeamGallery = doc[0].gallery.filter(data => data.id != body.id);

          doc[0].gallery = updateTeamGallery;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.gallery }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};