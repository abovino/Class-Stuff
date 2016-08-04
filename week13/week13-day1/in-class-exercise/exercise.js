var http = require('http');

var PORTS = [7000, 7500]; 

function handleRequestOne(request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

function handleRequestTwo(request, response) {
  response.end("You Smell :(");
}

var server = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);

server.listen(PORTS[0], function(){
  console.log("Server listening on: http://localhost:%s", PORTS[0]);
});

server2.listen(PORTS[1], function(){
  console.log("Server listening on: http://localhost:%s", PORTS[1]);
});