// Global Variables
			var pokemonArray = ["arbok","oddish","geodude","alakazam","golbat"];
			var lives = 5;
			var userGuesses = [];
			var userGuessesWrong = [];
			var wins = 0;
		

function randomWordGenerator(){
// Generates random word
			var index = Math.floor(Math.random()*pokemonArray.length);
			var pokemon = pokemonArray[index];
			console.log(pokemon);			




// Makes blanks
for(i = 0; i< pokemon.length; i++){
	 		 userGuesses.push("_");
	 		  
	}
		     userGuesses.join(" ");
		     document.getElementById("blanks").innerHTML = userGuesses;

// Sees if pokemon is correct
document.onkeyup = function pokemonGuess(event){	
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var uLC	= userGuess.toLowerCase();
		console.log(uLC);
for(i = 0; i<pokemon.length; i++){
	if (uLC === pokemon[i]){
		var pika = new Audio("assets/sounds/pika.mp3");
		pika.play();
		userGuesses[i] = uLC;	
		document.getElementById("blanks").innerHTML = userGuesses;
		}

	}

// Condition if the user's guess is wrong
if(pokemon.indexOf(uLC) === -1){
	lives --;
	userGuessesWrong.push(uLC);
	document.getElementById("chance").innerHTML = lives;
	document.getElementById("guessed").innerHTML = userGuessesWrong;
}

// If user runs out of lives gives user back lives = 5 but resets wins to 0
if(lives <= 0){
	userGuesses.splice(0,userGuesses.length);
	randomWordGenerator();
	userGuessesWrong.splice(0,userGuessesWrong.length);
	wins = 0;
	document.getElementById("wins").innerHTML = wins;
	lives = 5;
}

// If user won
if(userGuesses.join("") === pokemon){
	wins ++
	document.getElementById("wins").innerHTML = wins;
	userGuesses.splice(0,userGuesses.length);
	userGuessesWrong.splice(0,userGuessesWrong.length);
	document.getElementById("guessed").innerHTML = userGuessesWrong;
	randomWordGenerator();

	}




	}

// Provides clues
if(pokemon === pokemonArray[0]){
	document.getElementById("clue1").src = "assets/images/poison.png";
	document.getElementById("clue2").src = "assets/images/pokeball.gif";
; 
	}
if(pokemon === pokemonArray[1]){
	document.getElementById("clue1").src = "assets/images/poison.png";
	document.getElementById("clue2").src = "assets/images/grass.png";
	}
if(pokemon === pokemonArray[2]){
	document.getElementById("clue1").src = "assets/images/ground.png";
	document.getElementById("clue2").src ="assets/images/rock.png";
	}
if(pokemon === pokemonArray[3]){
	document.getElementById("clue1").src = "assets/images/psychic.png";
	document.getElementById("clue2").src = "assets/images/pokeball.gif";
	}
if(pokemon === pokemonArray[4]){
	document.getElementById("clue1").src = "assets/images/flying.png"; 
	document.getElementById("clue2").src = "assets/images/poison.png";
	}


	 		
					}








//Resets game, activated by button
	function reset() {
    	location.reload();
	}

