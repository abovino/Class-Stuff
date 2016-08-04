//Declares Dependencies
var mysql = require('mysql');
var express = require('express');

var app = express();


//Connects to the MySQL localhost
var connection = mysql.createConnection({
    host: "localhost",
    user: "root", //username
    password: "olejuve123", //password
    database: "seinfeld_db"
})

//Checks for connection error, starts app
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to seinfeld_db");
})


app.get('/cast', function(req, res) {
    connection.query('SELECT * FROM actors SORT BY id', function(err, result) {
        var html = '<h1> Seinfeld Characters </h1>';
        html += '<ul>'

        for (var i = 0; i < result.length; i++) {
            html += '<li><p> ID: ' + result[i].id + '</p>';
            html += '<p> Name: ' + result[i].name + '</p>';
            html += '<p> Coolness Points: ' + result[i].coolness_points + '</p>';
            html += '<p> Attitude: ' + result[i].attitude + '</p></li>';
        };

        html += '</ul>'

        res.send(html);
    });
});

app.get('/coolness-chart', function(req, res) {
    connection.query('SELECT * FROM actors order by coolness_points DESC', function(err, result) {

      var html = '<h1> Actors by Coolness </h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + ' </li>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + ' </p>';
        html += '<p>Attitude: ' + result[i].attitude + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});

app.get('/attitude-chart/:att', function(req, res) {
    connection.query('SELECT * FROM actors where attitude = ?', [req.params.att], function(err, result) {

      var html = '<h1> Actors With an Attitude of ' + req.params.att + '</h1>';

      html += '<ul>'

      // Use the data from the database to populate an HTML file
      for (var i = 0; i < result.length; i++) {
        html += '<li><p> ID: ' + result[i].id + '</p>';
        html += '<p> Name: ' + result[i].name + ' </li>';
        html += '<p> Coolness Points: ' + result[i].coolness_points + ' </p>';
        html += '<p>Attitude: ' + result[i].attitude + ' </p></li>';
      };

      html += '</ul>'

      // Send the html to the browser
      res.send(html);
  });
});

var port = 8080;
app.listen(port);