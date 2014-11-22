var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

console.log("controllers!!!");

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req) {
      models.messages.post(req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

