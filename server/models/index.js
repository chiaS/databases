var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      var result = db.getMessages('lobby');
      console.log(result);
      res.end(db.getMessages('lobby')); //send the data to client
    }, // a function which produces all the messages
    post: function(req) {
      db.addText(req.body.text, req.body.username, req.body.roomname, function(results){
        console.log(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },
  rooms: {}
};

