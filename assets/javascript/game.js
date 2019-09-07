// VARIABLES
// ==============================================================================

var disneyMovies = ["ZOOTOPIA", "MOANA", "TANGLED", "ALLADIN", "BRAVE", "INCREDIBLES", "MULAN", "RATATOUILLE", "HERCULES", "CINDERELLA", "POCAHONTAS", "ARISTOCATS", "PINOCCHIO", "FANTASIA", "MALEFICENT", "BAMBI", "PLANES", "FROZEN", "TARZAN"]

var wins = 0;
var displayWins = [];

var compMovie = "";
var compIndex = 0;
var displayMovie = [];


var maxGuessedLetters = 12;
var numGuessesLeft = 12;
var displayGuessesLeft = [];

var userLetter = "";
var isCapsLetter = false;

var guessedLetters = [];
var displayGuessedLetters = [];

var guessedMovie = [];

var arrLength = 0;
var diffLetters = 0;
var strGuessedMovie = "";
var strGuessedLetters = "";
var strEqualLetters = "";


// FUNCTIONS
// ==============================================================================
function displayStats() {
    console.log("displayStats()--> Function executed");
}

function pickRandomMovie() {
    console.log("pickRandomMovie()--> Function executed.");

    /*
    compIndex = Math.floor(Math.random() * disneyMovies.length);
    compMovie = disneyMovies[compIndex];
    console.log("pickRandomMovie()--> compIndex: " + compIndex);
    console.log("pickRandomMovie()--> Picked Movie: " + compMovie);
    console.log("pickRandomMovie()--> compMovie length " + compMovie.length);
    */

    // ojo Debug!!!
    compMovie = "MOANA";
    console.log("Picked Movie: " + compMovie);
    console.log("compMovie length " + compMovie.length);

    for (var i = 0; i < compMovie.length; i++) {
        displayMovie[i] = "_";
        console.log("pickRandomMovie()-->  displayMovie[" + i + "]: " + displayMovie[i]);
        guessedMovie[i] = "_";
        console.log("pickRandomMovie()-->  guessedMovie[" + i + "]: " + guessedMovie[i]);
    }
}

function validateGuessedMovie() {
    console.log("numGuessesLeft: " + numGuessesLeft);

    document.onkeyup = function (event) {
        console.log("onkeyup event!");

        userLetter = event.key.toUpperCase();
        console.log("userLetter: " + userLetter);

        // Validate that user keyed only letters
        isCapsLetter = isLetter(userLetter);
        console.log("isCapsLetter: " + isCapsLetter + "; isLetter: " + isLetter + "; userLetter: " + userLetter);

        if (!isCapsLetter) {
            console.log("Only letters are allowed. Try again!");
        } else {

            for (var i = 0; i < compMovie.length; i++) {
                console.log("For loop i: " + i);
                console.log("userLetter: " + userLetter + "; compMovie[i]: " + compMovie[i]);

                if (userLetter === compMovie[i]) {
                    guessedMovie[i] = userLetter;
                    console.log("guessedMovie[i]: " + guessedMovie[i] + "; i:" + i);
                    displayMovie[i] = userLetter;
                    console.log("displayMovie[i]: " + displayMovie[i] + "; i:" + i);
                }
            }   // End for loop i

            arrLength = 0;
            diffLetters = 0;
            strGuessedLetters = "";
            strEqualLetters = "";

            arrLength = guessedLetters.length;
            console.log("arrLength: " + arrLength);
            for (var j = 0; j < arrLength; j++) {
                console.log("For loop j: " + j);

                if (userLetter !== guessedLetters[j]) {
                    diffLetters++;
                    console.log("diffLetters: " + diffLetters);
                }
            }

            if (diffLetters === arrLength) {
                console.log("diffLetters" + diffLetters + "; arrLength: " + arrLength);

                guessedLetters.push(userLetter);
                strGuessedLetters = guessedLetters.join('');
                console.log("strGuessedLetters: " + strGuessedLetters + "; guessedLetters.length: " + guessedLetters.length);
                displayGuessedLetters.push(userLetter);
                console.log("if displayGuessedLetters.length: " + displayGuessedLetters.length);
            }

            strGuessedLetters = guessedLetters.join('');
            console.log("strGuessedLetters.length: " + strGuessedLetters.length + "; strGuessedLetters: " + strGuessedLetters);

            strEqualLetters = getUniqueCharacters(guessedMovie);
            console.log("strEqualLetters.length: " + strEqualLetters.length + "; strEqualLetters: " + strEqualLetters);

            numGuessesLeft = maxGuessedLetters - (strGuessedLetters.length - strEqualLetters.length);
            console.log("numGuessesLeft: " + numGuessesLeft + "; strGuessedLetters.length: " + strGuessedLetters.length + "; strEqualLetters.length: " + strEqualLetters.length);

            strGuessedMovie = guessedMovie.join('');
            console.log("strGuessedMovie.length: " + strGuessedMovie.length + "; strGuessMovie: " + strGuessedMovie);

            if (strGuessedMovie === compMovie) {
                wins++;
                score = score + wins;
                numGuessesLeft = 12;
            } else {
                if (numGuessesLeft === 0) {
                    wins = 0;
                }
            }
        }   // End else isCapsLetter
    }   // End onkeyup event
}

function hangman() {

    displayStats();
    console.log("hangman()--> Invoked displayStats()...");

    pickRandomMovie();
    console.log("hangman()--> Invoked pickRandomMovie()...");

    validateGuessedMovie();
    console.log("hangman()--> Invoked validateGuessedMovie()...");

    // Execute hangman() recursively until game over
    if (wins !== 0) {
        console.log("hangman()--> Invoked hangman()");

        celebrateWin();
        console.log("hangman()--> Invoked celebrateWin()...");

        hangman();
    }
    else if (wins === 0) {
        displayStats();
		console.log("hangman()--> Invoke displayStats()...");

        displayGameOver();
        console.log("hangman()--> Invoke displayGameOver()...");
    }
}

function displayGameOver() {
    console.log("displayGameOver()--> Function executed");
    console.log("displayGameOver()--> Display Game Over Stats!");
}

function celebrateWin() {
    console.log("celebrateWin()--> Function executed...");
}

// Retrieve unique characters from string
function getUniqueCharacters(str) {
    var result = {};

    for (var i = 0; i < str.length; i++) {
        if (str[i] != '_') result[str[i]] = 1;
    }
    return Object.keys(result).join("");
}
// Validate string is a letter from A-Z
function isLetter(letterAZ) {
    if (letterAZ === "A" || letterAZ === "B" || letterAZ === "C" || letterAZ === "D" || letterAZ === "E" || 
        letterAZ === "F" || letterAZ === "G" || letterAZ === "H" || letterAZ === "I" || letterAZ === "J" || 
        letterAZ === "K" || letterAZ === "L" || letterAZ === "M" || letterAZ === "N" || letterAZ === "O" || 
        letterAZ === "P" || letterAZ === "Q" || letterAZ === "R" || letterAZ === "S" || letterAZ === "T" || 
        letterAZ === "U" || letterAZ === "V" || letterAZ === "W" || letterAZ === "X" || letterAZ === "Y" || 
        letterAZ === "Z") {
        return true;
    } else {
        return false;
    }
}

// MAIN PROCESS
// ==============================================================================

console.log("Main--> Invoke hangman()");
hangman();


