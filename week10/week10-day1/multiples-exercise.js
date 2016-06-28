var inputString = process.argv;
var number = inputString[2];
var sum = 0;
var outputNum;

for (i = 6; i < number; i+=6) {
	console.log(i);

	sum += i;
}

console.log(sum);