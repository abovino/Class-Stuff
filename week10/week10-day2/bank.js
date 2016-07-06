var fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

switch(action){
	case 'total':
		total();
	break;

	case 'deposit':
		deposit();
	break;

	case 'withdraw':
		withdraw();
	break;

	
}