var music = require('./bands-exercise.js');
var inputString = process.argv;
var genre = inputString[2];

for (var key in music.bands){
	console.log("A " + key + " band is " + music.bands[key]);
}