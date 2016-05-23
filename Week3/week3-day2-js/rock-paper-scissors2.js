

<script>
	var computerChoices = ['r', 'p', 's'];

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];

		if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

			alert("user guess: " + userGuess);
			alert("computer guess: " + computerGuess);
		}
	}
	
</script>

