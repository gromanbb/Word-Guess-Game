// VARIABLES
// ==============================================================================
var wins = 0;
var displayMovie = [];
var numGuessesLeft = 12;
var guessedLetters = [];
// ojo
var displayWins = [];
var displayGuessesLeft = [];
var displayGuessedLetters = [];


var disneyMovies = ["ZOOTOPIA", "MOANA", "TANGLED", "ALLADIN"];
/* "BRAVE", "INCREDIBLES", "MULAN", "RATATOUILLE", "HERCULES", "CINDERELLA", "POCAHONTAS", "ARISTOCATS", "PINOCCHIO", "FANTASIA", "MALEFICENT", "BAMBI", "PLANES", "FROZEN", "TARZAN" */

var compMovie = "";
var compIndex = 0;
var userLetter = "";
var guessedMovie = "";

// ojo
var isFirstGame = true;



// FUNCTIONS
// ==============================================================================
function displayStats() {
    // ojo
    console.log("displayStats() executed");
    alert("Display Stats...");
}

function pickRandomMovie() {
    // ojo
    console.log("pickRandomMovie() executed");
    alert("Pick Random Movie...");

    var compIndex = Math.floor(Math.random() * disneyMovies.length);
    var compMovie = disneyMovies[compIndex];
    console.log("compIndex: " + compIndex);
    console.log("Picked Movie: " + compMovie);
    console.log("compMovie length " + compMovie.length);

    // ojo Display/Render
    for (var i = 0; i < compMovie.length; i++) {
        displayMovie[i] = "_";
        console.log("displayMovie[" + i + "]: " + displayMovie[i]);
    }
    
    console.log("numGuessesLeft" + numGuessesLeft);

    // Loop until there are no more guesses
    for (var z = numGuessesLeft; z > 0; z--) {
        // Validate keyed letter
        document.onkeyup = function(event) {
            userLetter = event.key.toUpperCase();
            console.log("userLetter: " + userLetter);
/*
            // Validate that user keyed only letters
            if (!userLetter.value.match(/^[A-Z]+$/)) {
                alert('Only letters are allowed. Try again!');
                // ojo
                console.log("Try again!");
            } else {
                */
                for (var i = 0; i < compMovie.length; i++) {
                    if (userLetter === compMovie[i]) {
                        guessedMovie = guessedMovie + userLetter;
                        console.log("guessedMovie: " + guessedMovie);
                        displayMovie[i] = userLetter;
                        console.log("displayMovie[i]: " + displayMovie[i] + "/ i:" + i);

                        //ojo check if already in guessedLetters???
                    } else {
                        // numGuessesLeft--;
                        console.log("numGuessesLeft: " + numGuessesLeft);

                        guessedLetters.push(userLetter);
                        displayGuessedLetters.push(userLetter);

                        // ojo
                        for (w = 0; w > guessedLetters.length; w++) {
                            console_log("guessedLetters[w]: " + guessedLetters[w] + "/ w:" + w);

                        }
    
                        // ojo Display changes here????
                        // displayStats();                        
                    }            
                }
            // }
        }
    }

}

function validateGuessedMovie() {
    // ojo
    console.log("validateGuessedMovie() executed");
    alert("Validate Guessed Movie...");
 
/*
    if (guessedMovie === compMovie ) {
        wins++;
        numGuessesLeft = 12;
        userLetter = "";
        guessedMovie = "";
        compIndex = 0;
        compMovie = "";
        displayMovie = "";  // ojo how to initialize an array???
        displayMovie = [];
        guessedLetters = [];
        displayGuessesLeft = [];
        displayGuessedLetters = [];

    }
*/
}

function celebrateWin() {
    // ojo
    console.log("celebrateWin() executed");
    alert("Celebrate Win!!!");
}

function hangman() {

    displayStats();
    //ojo
    console.log("Invoked displayStats() from hangman()...");
    alert("Invoked displayStats() from hangman()...");

    pickRandomMovie();
    // ojo
    console.log("Invoked pickRandomMovie() from hangman()...");
    alert("Invoked pickRandomMovie() from hangman()...");

    validateGuessedMovie();
    // ojo
    console.log("Invoked validateGuessedMovie() from hangman()...");
    alert("Invoked validateGuessedMovie() from hangman()...");

    // Execute hangman() recursively until game is over
    if (wins !== 0) {
        // ojo
        console.log("Invoked hangman() after winning...");
        alert("Invoked hangman() after winning...");

        //ojo
        celebrateWin();
        console.log("Invoked celebrateWin() after winning...");
        alert("Invoked celebrateWin() after winning...");

        hangman();
    }
    else if (wins === 0) {
        // ojo
        console.log("Invoke displayStats() after loosing...");
        alert("Invoke displayStats() after loosing...");

        displayStats();

        // ojo
        console.log("Invoke displayGameOver() after loosing...");
        alert("Invoke displayGameOver() after loosing...");

        displayGameOver();
    }
}

function displayGameOver() {
    console.log("displayGameOver() executed");
    alert("Game Over!");
}

// MAIN PROCESS
// ==============================================================================

console.log("Invoke hangman() for the first time...");
alert("Invoke hangman() for the first time...");

hangman();

