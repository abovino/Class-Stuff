//NPM Package for reading and writing files
var fs = require('fs');

fs.writeFile("best_things_ever.txt", 'AS Roma, Euro 2016, Football, Chipotle, Various Chain Burrito Restaurants, Benito', function(err) {

// If there are errors the console will log them
	if (err) {
		console.log(err);
	}

	console.log("best_things_ever.txt created succesfully!");
});

fs.readFile("best_things_ever.txt", "utf8", function(error, data){

	console.log(data);

	var dataArr = data.split(',');

	for (var i=0; i<dataArr.length; i++){
		console.log(dataArr[i]);
	}

	// console.log(dataArr);
})