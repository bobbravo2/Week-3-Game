$(function(){

	//variables that hold the information for the game
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	//function that runs the program if the user wins or losses
	function newRandom(){
		//creates a random number between 19 and 120
			var randomCompNumber = [Math.floor(Math.random() * 120) + 19];

	}

		newRandom();
	function runProgram(){

		//event handler that detects clicks
		$("#crystal1").on("click" function() {




		})


		if (totalScore === randomCompNumber) {

			wins++;
			runProgram();

			}

		if (totalScore > randomCompNumber) {

			losses++;
			runProgram();

			}


} else {



}


})