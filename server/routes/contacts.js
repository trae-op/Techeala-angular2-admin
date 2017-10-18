


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
  editMapCoordinates(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.contacts.find()
        .then(doc => {
          
          doc[0].mapCoordinates[0].lat = body.mapCoordinates.lat || 0;
          doc[0].mapCoordinates[0].lng = body.mapCoordinates.lng || 0;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.mapCoordinates }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },
  getContacts(url) {
    this.app.get(url, (req, res, next) => {
      db.contacts.find()
        .then(doc => {

          if (!doc.length) {
            let collection = new db.contacts({
              contacts: [],
              mapCoordinates: [{
                lat: 0,
                lng: 0
              }]
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
  addContact(url) {
    this.app.post(url, (req, res, next) => {
      let body = req.body;
      db.contacts.find()
        .then(doc => {

          doc[0].contacts.push({
            name: body.name,
            icon: body.icon,
            link: body.link
          });

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.contacts }))
            .catch(err => next(err));
          
        })
        .catch(err => next(err))
    });

    return this;
  },
  editContact(url) {
    this.app.put(url, (req, res, next) => {

      let body = req.body;

      db.contacts.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let contact = _.find(doc[0].contacts, contact => contact.id === body.id);

          contact.name = body.name || '';
          contact.icon = body.icon || '';
          contact.link = body.link || '';

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.contacts }))
            .catch(err => next(err));

        })
        .catch(err => next(err))
    });

    return this;
  },
  deleteContact(url) {
    this.app.delete(url, (req, res, next) => {

      let body = req.body;

      db.contacts.find()
        .then(doc => {

          if (!globalMethods.checkId(body.id, res)) return;

          let updateContacts = doc[0].contacts.filter(contact => contact.id != body.id);

          doc[0].contacts = updateContacts;

          doc[0]
            .save().then(data => res.json({ successful: true, data: data.contacts }))
            .catch(err => next(err));

        })
        .catch(err => next(err))

    });

    return this;
  }
};