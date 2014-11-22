var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
//
var connection;
exports.connect = function(){
  connection = mysql.createConnection(
      {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'chat',
      }

  );


  connection.connect();


  // connection.end();
};

var query = function(queryString, callback) {
  connection.query(queryString, function(err, results) {
    if (err) throw err;
    callback(results);
  });
};

var findUser = function(user, callback){
  console.log('test');
  var queryString = 'select userId from users where username = "'+ user+'"' ;
  query(queryString, callback);
};

var addUser = function(user, callback) {
  var queryString = 'insert into users (username) values ("'+ user + '")';
  query(queryString, callback);
};

var findRoom = function(room, callback) {
  var queryString = 'select roomId from rooms where roomname = "'+ room+'"' ;
  query(queryString, callback);
};

var addRoom = function(room, callback) {
  var queryString = 'insert into rooms (roomname) values ("'+ room + '")';
  query(queryString, callback);
};

var findText = function(text, callback) {
  var queryString = 'select * from messages where text = "'+ text + '"';
  query(queryString, callback);
};

var addText = function(text, user, room, callback) {
  var userId, roomId;
  findUser(user, function(results){
    userId = results[0].userId;
    findRoom(room, function(results){
      roomId = results[0].roomId;
      var queryString = 'insert into messages (text, userId, roomId) values ("'+ text + '","' +userId+'","'+roomId+'")';
      query(queryString, callback);
    });
  });
};

exports.findUser = findUser;
exports.addUser = addUser;
exports.findRoom = findRoom;
exports.addRoom = addRoom;
exports.findText = findText;
exports.addText = addText;






