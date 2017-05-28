$(document).ready(function(){ 
	//variables that hold the information for the game
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	//function that runs the program if the user wins or losses

	function runProgram(){

		//event handler that detects clicks
		$(".candyPiece").on("click", function() {
			var randomUserNumber = Math.floor(Math.random() * 12) + 1;
			console.log(randomUserNumber)
		})


		if (totalScore === randomCompNumber) {

			wins++;
			newRandom();
			runProgram();

			}

		if (totalScore > randomCompNumber) {

			losses++;
			runProgram();

			}   


		}

	})


