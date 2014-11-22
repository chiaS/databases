var models = require('../models');
var bluebird = require('bluebird');


console.log("controllers!!!");

module.exports = {

  messages: {
    get: function (req, res) {
    //retrive from db
    }, // a function which handles a get request for all messages
    post: function (req, res) {
     console.log('testtest');
    //store to db

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

