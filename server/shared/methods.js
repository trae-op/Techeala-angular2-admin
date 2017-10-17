
const colors = require('colors');
const messages = require('./messages');

module.exports = {
  checkId(id, res) {
    if (!id) {
      console.log(colors.red(messages.shared.missingId));
      res.json({successful: false, data: false, message: messages.shared.missingId});
      return false;
    } else return true;
  }
};