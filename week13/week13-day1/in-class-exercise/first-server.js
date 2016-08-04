var http = require('http');
var fs = require('fs');
var url = require('url');

var PORT = 8080;

var server = http.createServer(handleRequest);

//Start server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(req, res) {
  var url_parts = url.parse(req.url);

  switch(url_parts.pathname) {
    case "/":
    case "/index":
      display_index(url_parts.pathname, req, res);
      break;
    case "/food":
      display_food(url_parts.pathname, req, res);
      break;
    case "/movies":
      display_movies(url_parts.pathname, req, res);
      break;
    case "frameworks":
      display_frameworks(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_index(url, req, res) {
  fs.readFile("index.html", function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  })
}

function display_food(url, req, res) {
  fs.readFile("food.html", function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  })
}

function display_movies(url, req, res) {
  fs.readFile("movies.html", function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  })
}

function display_frameworks(url, req, res) {
  fs.readFile("frameworks.html", function(err, data) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  })
}

// When we visit any path that is not specifically defined, this function is run.
function display_404(url, req, res) {
  console.log("404");
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}