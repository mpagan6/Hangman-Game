// set computer variables
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// create variable to track wins, losses, userguesses and guesses left

var guessLeft = 9;
var guesses = 9;
var guessedLetters = [];
var letterToGuess = null;
var win = 0;
var losses = 0;

// Randomly chooses a letter from the choices array. This is the Computer's output.

    var computerOutput = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//update the html guesses left
    var updateguessLeft = function() {
        document.getElementById('#guessLeft').innerHTML;("Guesses left: " + guessLeft);
    };

// update guesses made
    var updateguessedLetters = function (){
        document.getElementById('#yourGuesses').innerHTML;("Your Guesses so far: " + guessedLetters.join(', ')); 
    };

// letter to guess
var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };

// reset the game once won or lost
    var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updateLetterToGuess ();
    updateguessLeft();
    updateguessedLetters();
  }
  updateLetterToGuess ();
  updateguessLeft();
  updateguessedLetters();
  
//
//users action
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (guessedLetters == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};


// user has 9 guesses, if user guesses letter prior to counter reaching 0 then wins goes up by one
// if user does not guess letter than losses counter goes up by 1
// once guesses exhausted or win game will reset
// users guesses to be recorded on screen
