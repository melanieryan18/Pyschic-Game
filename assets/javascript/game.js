// define variables for storage later
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var choices = [""];

// Function to increment counter

// Create variables that hold references to the places in the HTML where we want to display things.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var guessCounter = 9

// on key press, game starts
document.onkeyup = function (event) {
    // computer chooses random letter from computerChoices array
    // user presses key (letter) 
    var userGuess = event.key;
    console.log(computerGuess);
    console.log(userGuess);

    // if computerChoices = the user key pressed,
    // the user gains wins
    // the user's guesses reset to 9
    // the user choices field is cleared
    if (event.key === computerGuess) {
        wins++;
        guesses = 9;
        // choices.push(event.key);
        alert("You guessed it! Ur outta this world!");
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        choices = [""];

    }

    
    // if the computerChoices !== the user key pressed, and lives is >= 9
    // the user losses adds 1
    // the user's guesses reset to 9
    // the user choices field is cleared
    else if (event.key !== computerGuess && guesses === 0) {
        losses++;
        guesses = 9;
        console.log(computerGuess);
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        choices = [""];
    }


    // if the computerChoices !== the user key pressed, and lives is < 9
    // the user guesses subtracts by 1
    // the letter pressed by the user is listed in the choices field on the html page
    // this continues until guesses = 9
    else if (event.key !== computerGuess) {
        guesses--;
        choices.push(event.key);
        console.log(computerGuess);
    }


    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guesses;
    document.getElementById("choices").textContent = choices;

};