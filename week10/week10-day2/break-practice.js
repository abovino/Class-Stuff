var fs = require('fs');

fs.writeFile("practice-list.txt", 'Fizz,Buzz,Wuzz', function(err){

	if(err){
		console.log(err);
	}

	console.log("File succesfully created");
})

fs.readFile("practice-list.txt", "utf8", function(err, data){

	console.log(data);

	var write = data.split(',');

	for (i = 0; i < write.length; i++){
		console.log(write[i]);
	}
})