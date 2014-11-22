var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

console.log("controllers!!!");

module.exports = {

  messages: {
    get: function (req) {
    //retrive from db
      db.getMessages('lobby');
     //res.sendFile('/Users/student/Desktop/2014-10-databases/client/client/index.html');
    }, // a function which handles a get request for all messages
    post: function (req) {
      db.addText(req.body.text, req.body.username, req.body.roomname, function(results){
        console.log(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

