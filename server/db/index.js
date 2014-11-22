var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
//
exports.connection = function(){
  var connection = mysql.createConnection(
      {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'chat',
      }
  );

  connection.connect();

  var query = function(queryString, callback) {
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      callback(results);
    });
  };

  // connection.end();
};

exports.findUser = function(user, callback){
  var queryString = 'select * from users where username = "'+ user+'"' ;
  query(queryString, callback);
};

exports.addUser = function(user, callback) {
  var queryString = 'insert into users (username) values ("'+ user + '")';
  query(queryString, callback);
};

exports.findRoom = function(room, callback) {
  var queryString = 'select * from rooms where roomname = "'+ room + '"';
  query(queryString, callback);
};

exports.addRoom = function(room, callback) {
  var queryString = 'insert into rooms (roomname) values ("'+ room + '")';
  query(queryString, callback);
};

exports.findText = function(text, callback) {
  var queryString = 'select * from messages where text = "'+ text + '"';
  query(queryString, callback);
};

exports.addText = function(text, user, room, callback) {
  var userId, roomId;
  findUser(user, function(id){
    userId = id;
  });
  findRoom(room, function(id){
    roomId = id;
  });
  var queryString = 'insert into messages (text, roomId, userId) values ("'+ text + '",'+roomId+','+userId+')';
  query(queryString, callback);
};



