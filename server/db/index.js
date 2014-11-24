var mysql = require('mysql');

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

exports.query = function(queryString, params, callback) {
  if(arguments.length === 3){
    queryString += ' ('+params.join(',')+')';
  }else if(arguments.length === 2){//without params
    callback = params;
  }
  console.log(queryString);
  connection.query(queryString, function(err, results) {
    if (err) throw err;
    console.log(results);
    callback(results);
  });
};

exports.findRoom = function(roomname, callback) {
  var queryString = 'select roomId from rooms where roomname = "'+ roomname +'"' ;
  this.query(queryString, function(res){
    callback(res[0].roomId);
  });

};


