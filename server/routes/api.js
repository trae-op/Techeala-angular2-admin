
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const app = express();

// containing data of database
const db = require('../../server/db').DataBase;

/* GET api listing. */
app.get('/', (req, res) => {
  res.send('api works');
});


app.get('/get/allData', (req, res, next) => {
  //var body = req.body;

  db.modelData.find()
    .then(doc => res.json(doc[0].allData))
    .catch(err => next(err))
});



/*app.get('/get/mainMenu', (req, res, next) => {

  db.modelData.find()
    .then(doc => {

      doc[0]
        .save().then(data => {
          let menu = data.allData.map(function(v) {
            return _.pick(v, ['page', 'link']);
          });
          res.json(menu);
        })
        .catch(err => next(err));

    })
    .catch(err => next(err))

});


app.get('/get/slides', (req, res, next) => {

  db.modelData.find()
    .then(doc => {

      doc[0]
        .save().then(data => res.json(data.allData[0].dataPage.slides))
        .catch(err => next(err));

    })
    .catch(err => next(err))

});


app.get('/get/:name/slide', (req, res, next) => {
  let name = req.params.name;
  //console.log('name->', db.modelData)
  db.modelData.find()
    .then(doc => {

      //console.log('======>', );

      doc[0]
        .save().then(data => {
          console.log('======>', _.find(data.allData[0].dataPage.slides, slide => slide.name === name));
          res.json(_.find(data.allData[0].dataPage.slides, slide => slide.name === name))
        })
        .catch(err => next(err));

    })
    .catch(err => next(err))

});*/


app.post('/add/slide', (req, res, next) => {
  //var body = req.body;

  db.modelData.find()
    .then(doc => {

      doc[0].allData[0].dataPage.slides.push({
        name: "",
        image: ""
      });

      doc[0]
        .save().then(data => res.json({ successful: true, data: data.allData[0].dataPage.slides }))
        .catch(err => next(err));
      
    })
    .catch(err => next(err))

});





module.exports = app;