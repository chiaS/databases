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

  var queryString = 'SELECT * FROM messages';

  connection.query(queryString, function(err, rows, fields) {
      if (err) throw err;

      for (var i in rows) {
          console.log('text: ', rows[i].roomId);
      }
  });

  connection.end();

};



