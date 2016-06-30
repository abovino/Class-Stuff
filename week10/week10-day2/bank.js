var fs = require('fs');

fs.writeFile("bank.txt", function(err){

})

var inputString = process.argv;

var operand = inputString[2];
var money = inputString[3];

var output;

switch(money){
	case 'deposit':
		console.log("Depositing $" + money);
		break;
	case 'widthdraw':
		console.log("widthdrew $" + money);
		break;
}