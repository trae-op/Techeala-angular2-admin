

const _ = require('lodash');
const colors = require('colors');
const messages = require('../shared/messages');

// containing data of database
const db = require('../../server/db').DataBase;

module.exports = {
  init(callBack) {
    callBack(this);
    return this;
  },
  getMainMenu(url) {
    this.app.get(url, (req, res, next) => {
      db.mainMenu.find()
        .then(doc => {
          if (!doc.length) {
            let collection = new db.mainMenu({
              menu: [
                {
                  "page": "Home",
                  "link": "home"
                },
                {
                  "page": "About company",
                  "link": "about"
                },
                {
                  "page": "Portfolio",
                  "link": "portfolio"
                },
                {
                  "page": "Technologies",
                  "link": "technologies"
                },
                {
                  "page": "Vacancies",
                  "link": "vacancies"
                },
                {
                  "page": "Contacts",
                  "link": "contacts"
                },
                {
                  "page": "FAQ",
                  "link": "faq"
                }
              ]
            });

            collection.save().then(data => res.json([data][0].menu)).catch(err => next(err));      
          } else {
            res.json(doc[0].menu);
          }

        })
        .catch(err => next(err))
    });
  }
};