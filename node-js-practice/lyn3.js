/*var fs = require('fs');
var file = process.argv[2];

var buf = fs.readFileSync(file);

var str = buf.toString();
var lines = str.split('\\n');

console.log(lines.length-1);*/

var fs = require(‘fs’)
var file = process.argv;

var buf = fs.readFileSync(file);
var str = buf.toString();
var lines = str.split(‘\n’);
console.log(lines.length — 1);