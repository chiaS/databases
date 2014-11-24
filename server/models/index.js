var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = "select messages.text, messages.username, rooms.roomname\
                      from messages left outer join rooms on (messages.roomId = rooms.roomId)";
      db.query(queryStr, callback);
    }, 
    post: function(params, callback) {
      db.findRoom(params[params.length-1], function(roomId){
        params[params.length-1] = roomId;
        var queryStr = "insert into messages (text, username, roomId) values";
        db.query(queryStr, params, callback);

      });
    }
  },

  rooms: {
    get: function (callback) {
      var queryStr = 'select * from rooms';
      db.query(queryStr, callback);
    },
    post: function (params, callback) {
      var queryStr = 'insert into rooms (roomname) values';
      db.query(queryStr, params, function(err, results){
        callback(results);
      });
    }
  }
};

