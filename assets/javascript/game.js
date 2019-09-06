// VARIABLES
// ==============================================================================
var wins = 0;
var displayMovie = [];
var numGuessesLeft = 12;
var guessedLetters = [];

var disneyMovies = ["ZOOTOPIA", "MOANA", "TANGLED", "ALLADIN"];
/* "BRAVE", "INCREDIBLES", "MULAN", "RATATOUILLE", "HERCULES", "CINDERELLA", "POCAHONTAS", "ARISTOCATS", "PINOCCHIO", "FANTASIA", "MALEFICENT", "BAMBI", "PLANES", "FROZEN", "TARZAN" */

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compMovie = [];
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
}

function validateGuessedMovie() {
    // ojo
    console.log("validateGuessedMovie() executed");
    alert("Validate Guessed Movie...");

}

function hangman () {

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

    // Execute hangman() in a recursive manner until game is lost!!!
    // ojo force winning first game to validate logic!
    if (isFirstGame) {
        wins = 1;
        isFirstGame = false;
        console.log("wins = " + wins + " / isFirstGame = " + isFirstGame);
        hangman();
    }
    else {
        wins = 0;
    }
}

function displayGameOver() {
    console.log("displayGameOver() executed");
    alert("Game Over!");
}

// MAIN PROCESS
// ==============================================================================

// Play game at least one Time
// ojo
console.log("Invoke hangman() for the first time...");
alert("Invoke hangman() for the first time...");

hangman();

// ojo check wins
console.log("wins = " + wins);

// ojo move below logic to hangman function
if (wins !== 0) {
    // ojo
    console.log("Invoked hangman() after winning...");
    alert("Invoked hangman() after winning...");

    hangman();
}
else if ( wins === 0) {
    // ojo
    console.log("Invoke displayStats() after loosing...");
    alert("Invoke displayStats() after loosing...");

    displayStats();

    // ojo
    console.log("Invoke displayGameOver() after loosing...");
    alert("Invoke displayGameOver() after loosing...");

    displayGameOver();
}
