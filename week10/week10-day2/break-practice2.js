var fs = require('fs')

fs.writeFile("practice-list2.txt", 'Juventus,Roma,Milan,Inter,Napoli', function(err){

	if(err){
		console.log(err);
	}

	console.log('--File created succesfully!--');
});

fs.readFile("practice-list2.txt", "utf8", function(error, data){

	console.log(data);

	var dataArr = data.split(',');

	console.log(dataArr);

	for (i = 0; i < dataArr.length; i++){
		console.log(dataArr[i]);
	}
})