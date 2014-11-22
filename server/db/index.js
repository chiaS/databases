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

var addUser = function(user, callback) {
  var queryString = 'insert into messages (username) values ("'+ user + '")';
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

var findText = function(topic, value, callback) {
  var queryString = 'select * from messages where ' + topic + ' = '+ value;
  query(queryString, callback);
};

var addText = function(text, username, room, callback) {
  var roomId;
  findRoom(room, function(results){
    roomId = results[0].roomId;
    var queryString = 'insert into messages (text, username, roomId) values ("'+ text + '","' +username+'","'+roomId+'")';
    query(queryString, callback);
  });
};

var getMessages = function(roomname){
  //constraint: roomname
  //display text with username
  var resultArr = [];
  var roomId, username, text;
  //1 - find room id with room name
  findRoom(roomname, function(results){
    roomId = results[0].roomId;
    //2 - find text and user id with room id
    findText('roomId', roomId, function(results){
      for(var i=0; i<results.length; i++){
        text = results[i].text;
        username = results[i].username;
        //3 - display username with userid
        // console.log(username, text);
        resultArr.push({'text':text, 'username':username, 'roomname':roomname});

      }
      (function(){
        return resultArr;
      })();
//return not going thoruhg
    });
  });
};

exports.addUser = addUser;
exports.findRoom = findRoom;
exports.addRoom = addRoom;
exports.findText = findText;
exports.addText = addText;
exports.getMessages = getMessages;





