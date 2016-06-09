// Link to Firebase
var bidderData = new Firebase("https://codersbay-exercise.firebaseio.com/");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
bidderData.on('value', function(snapshot){

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){

		// Set the initial variables for highBidder equal to the stored values.
		var highBidder = $('#highBidder').val().trim();
		var highPrice = $('#highPrice').val().trim();


		// Change the HTML to reflect the initial value
		$('#highestBidder').html(snapshot.val().highBidder);
		$('#highPrice').html(snapshot.val().highPrice);


		// Print the initial data to the console.
		console.log(snapshot.val().highBidder);
		console.log(snapshot.val().highPrice);

	}

	// Else Keep the initial variables for highBidder equal to the initial values
		else {

			$('#highestBidder').html(initialBidder);
			$('#highestPrice').html(initialBid);

		}


// If any errors are experienced, log them to console. 
})

// --------------------------------------------------------------

// Whenever a user clicks the click button
$('#submitbid').on('click', function(){

	// Get the input values
	var highPrice = $('#bidderPrice').val().trim();
	var highBidder = $('#bidderName').val().trim();


	// Log the Bidder and Price (Even if not the highest)
	console.log(snapshot.val().highPrice);
	console.log(snapshot.val().highbidder);

	// If Then statements to compare against previous high bidder
	if (highPrice > initialBid){

		// Alert that they are High Bidder
		alert("You are the highest bidder!");

		// Save the new price in Firebase
		bidderData.set({
			Current Price: highPrice,
		})

		// Log the new High Price


		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


		// Change the HTML to reflect the new high price and bidder
	}

	// Else tell user their bid was too low via alert


	// Return False to allow "enter"

})
