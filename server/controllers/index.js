var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        res.status(200).send({results:results});
      });
    },
    post: function (req, res) {
      var params = ['"'+req.body.text+'"', '"'+req.body.username+'"', req.body.roomname];
      models.messages.post(params, function(err){
        res.sendStatus(201);
      });
    } 
  },

  rooms: {
    get: function (req, res) {
      models.rooms.get(function(results){
        console.log('room list===>'+results);
        res.status(200).send({results:results});
      });
    },
    post: function (req, res) {
      var params = ['"'+req.body.roomname+'"'];
      console.log('post new room');
      models.rooms.post(params, function(err, results){
        res.sendStatus(201);
      });
    }
  }
};

