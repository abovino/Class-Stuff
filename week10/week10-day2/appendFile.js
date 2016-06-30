//Grab the fs package to handle read/write
var fs = require('fs');

//We then store textfile filename fiven to us from the command line
var textFile = process.argv[2];

//Append the contents "hello kitty" into the file
//If the files doesn't exist it gets created on the fly
fs.appendFile(textFile, "Hello Kitty", function(err){

	//If there's an error it will log in the console
	if(err){
		console.log(err);
	} 

	// If no error, log to console "Content Added!"
	else {
		console.log("Content Added!");
	}
	
})