// Link to Firebase
var clickData = new Firebase("https://rcb-downbutton.firebaseio.com/");

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
/*$('#clickButton').on('click', function(){

	// Print the initial data to the console.
	console.log('clickData')

	// Change the html to reflect the initial value.
	clickCounter--;

	clickData.set({
		clickCount: clickCounter
	});

	// Change the clickcounter to match the data in the database
	clickData.on('value', function(snapshot) {

	// Log the value of the clickCounter
	console.log(snapshot.val());

	// Change the HTML Value
	$('#clickValue').html(snapshot.val().clickCount);

	clickCounter = snapshot.val().clickCount;
},

// If any errors are experienced, log them to console. 
	function (errorObject) {
		console.log('The read failed: " + errorObject.code');
	});*/



// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	$('#clickValue').html(snapshot.val().clickCounter)


	// Alert User and reset the counter
	



	// Save new value to Firebase



	// Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue


	
	// Save new value to Firebase




	// Log the value of clickCounter



	// Change the HTML Values



});

