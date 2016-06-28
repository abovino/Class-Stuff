//Solution 1

var numOne = process.argv[2];
var numTwo = process.argv[3];

if (numOne == numTwo){
	console.log(true);
} else {
	console.log(false);
}

//Solution 2 - Simplified (refactored)
console.log(process.argv[2] == process.argv[3]);