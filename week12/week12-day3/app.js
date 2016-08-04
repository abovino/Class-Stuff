var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "olejuve123", //Your password
    database: "topSongs_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
/*    start();*/
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do",
    choices: ["Find songs by artist",
    "Find all artists who appear more than once",
    "Find data within a specific range",
    "Search for a specific song"]
  }).then(function(answer) {
    switch(answer.action) {
      case 'Find songs by artist':
        artistSearch();
      break;

      case 'Find all artists who appear more than once':
        multiSearch();
      break;

      case 'Search for a specific song':
        songSearch();
      break;
    }
  })
};

var artistSearch = function() {
  inquirer.prompt({
    name: "artist",
    type: "input",
    message: "What artist would you like to search for?"
  }).then(function(answer) {
    var query = 'SELECT postiion, song, year FROM top5000 ?'
    connection.query(query, {artist: answer.artist}, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || song: " + res[i].song + " || Year: " + res[i].year + " || Total: " + res[i].total);
      }
      runSearch();
    })
  })
};

var multiSearch = function() {
  var query = 'SELECT artist, count(*) FROM top5000 GROUP BY artist HAVING count(*) > 1';
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  })
};

var rangeSearch = function() {
  inquirer.prompt([{
    name: "start",
    type: "input",
    message: "Enter Starting position: ",
    validate: function(value) {
      if (isNaN(value) == false) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    name: "end",
    type: "input",
    message: "Enter ending position: ",
    validate: function(value) {
      if (isNaN(value) == false) {
        return true;
      } else {
        return false;
      }
  }]).then(function(answer) {
    var query = 'SELECT position, song, artist, year FROM top5000 WHERE position BETWEEN ? AND ?';
    connection.query(query, [answer.start, answer.end], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
      }
      runSearch();
    })
  })
}