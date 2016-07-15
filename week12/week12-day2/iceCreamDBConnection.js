var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "olejuve123", //Your password
  database: "playlistdb"
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as ID " + connection.threadId);
});

/*connection.query('SELECT * FROM playlist', function (err,res){
  console.log('Data received from Db:\n');
  console.log(res);
});*/

connection.query('SELECT * FROM playlist', function (err, res){
  for (var i = 0; i < res.length; i++){
    console.log(res[i].ID + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
  console.log("----------------------------------");
});

connection.query('SELECT * FROM playlist WHERE genre=?', ['Hip Hop'], function(err, res){
  for (var i = 0; i < res.length; i++){
    console.log(res[i].ID + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
});