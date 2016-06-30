/*//My Answer
var numOne = Number(process.argv[2]);
var numTwo = Number(process.argv[3]);

console.log(numOne + numTwo);*/

var result = 0

for (var i = 2; i < process.argv.length; i++)
	result += Number(process.argv[i])
	console.log(result);

//Official solution
/*var result = 0

     for (var i = 2; i < process.argv.length; i++)
       result += Number(process.argv[i])

     console.log(result)*/