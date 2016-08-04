var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "olejuve123", //Your password
  database: "greatbay"
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as ID " + connection.threadId);
});

var question = "Would you like to POST AN ITEM or BID ON AN ITEM?";

 