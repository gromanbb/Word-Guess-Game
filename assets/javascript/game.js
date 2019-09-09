// VARIABLES
// ==============================================================================

var disneyMovies = ["ZOOTOPIA", "MOANA", "TANGLED", "ALLADIN", "BRAVE", "INCREDIBLES", "MULAN", "RATATOUILLE", "HERCULES", "CINDERELLA", "POCAHONTAS", "ARISTOCATS", "PINOCCHIO", "FANTASIA", "MALEFICENT", "BAMBI", "PLANES", "FROZEN", "TARZAN"]

var score = 0;
var wins = 0;
var displayWins = [];
var strDivImage = "";

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

var liveGame = false;

// FUNCTIONS
// ==============================================================================
function displayStats() {
    //console.log("displayStats()--> Function executed");

    document.querySelector("#pWins").innerHTML = "<h5>Wins: " + score + "</h5>";
    document.querySelector("#pCurrentWord").innerHTML = "<h5>Current Word:  " + strGuessedMovie + "</h5>";
    document.querySelector("#pGuessesLeft").innerHTML = "<h5>Number of guesses remaining: " + numGuessesLeft + "</h5>";
    document.querySelector("#pLettersGuessed").innerHTML = "<h5>Letters already guessed: " + strGuessedLetters + "</h5>";

}

function pickRandomMovie() {
    //console.log("pickRandomMovie()--> Function executed.");

    compIndex = Math.floor(Math.random() * disneyMovies.length);
    compMovie = disneyMovies[compIndex];
    console.log("pickRandomMovie()--> compIndex: " + compIndex);
    console.log("pickRandomMovie()--> Picked Movie: " + compMovie);
    console.log("pickRandomMovie()--> compMovie length " + compMovie.length);

    for (var i = 0; i < compMovie.length; i++) {
        displayMovie[i] = "_";
        //console.log("pickRandomMovie()-->  displayMovie[" + i + "]: " + displayMovie[i]);
        guessedMovie[i] = "_";
        //console.log("pickRandomMovie()-->  guessedMovie[" + i + "]: " + guessedMovie[i]);
    }
    liveGame = true;
}



document.onkeyup = function (event) {
    if (liveGame) {
        console.log("onkeyup event!");

        userLetter = event.key.toUpperCase();
        console.log("userLetter: " + userLetter);

        // Validate that user keyed only letters
        isCapsLetter = isLetter(userLetter);
        if (!isCapsLetter) {
            console.log("Only letters are allowed. Try again!");
        } else {
            for (var i = 0; i < compMovie.length; i++) {

                if (userLetter === compMovie[i]) {
                    guessedMovie[i] = userLetter;
                    displayMovie[i] = userLetter;
                }
            }

            arrLength = 0;
            diffLetters = 0;
            strGuessedLetters = "";
            strEqualLetters = "";

            arrLength = guessedLetters.length;
            for (var j = 0; j < arrLength; j++) {

                if (userLetter !== guessedLetters[j]) {
                    diffLetters++;
                }
            }

            if (diffLetters === arrLength) {
                guessedLetters.push(userLetter);
                strGuessedLetters = guessedLetters.join('');
                displayGuessedLetters.push(userLetter);

                //console.log("strGuessedLetters: " + strGuessedLetters + "; guessedLetters.length: " + guessedLetters.length);
            }

            strGuessedLetters = guessedLetters.join('');
            console.log("strGuessedLetters.length: " + strGuessedLetters.length + "; strGuessedLetters: " + strGuessedLetters);

            strEqualLetters = getUniqueCharacters(guessedMovie);
            console.log("strEqualLetters.length: " + strEqualLetters.length + "; strEqualLetters: " + strEqualLetters);

            numGuessesLeft = maxGuessedLetters - (strGuessedLetters.length - strEqualLetters.length);
            console.log("numGuessesLeft: " + numGuessesLeft + "; strGuessedLetters.length: " + strGuessedLetters.length + "; strEqualLetters.length: " + strEqualLetters.length);

            strGuessedMovie = guessedMovie.join('');
            console.log("strGuessedMovie.length: " + strGuessedMovie.length + "; strGuessedMovie: " + strGuessedMovie);

            displayStats();

            if (strGuessedMovie === compMovie) {
                //console.log("strGuessedMovie: " + strGuessedMovie + "; compMovie: " + compMovie);

                wins++;
                //console.log("wins: " + wins);

                score = score + wins;
                console.log("score: " + score);
            } else {
                if (numGuessesLeft === 0) {
                    wins = 0;
                }
            }
        }   // End else isCapsLetter

    }


}   // End onkeyup event

function hangman() {

    displayStats();
    pickRandomMovie();
    validateGuessedMovie();

    // Execute hangman() recursively until game over
    if (wins !== 0) {

        celebrateWin();
        displayStats();

        wins = 0;
        numGuessesLeft = 12;
        strGuessedMovie = "";
        hangman();
    }
    else if (wins === 0) {
        displayStats();
        displayGameOver();
    }
}

function displayGameOver() {
    //console.log("displayGameOver()--> Function executed");
}

function celebrateWin() {
    console.log("celebrateWin()--> Function executed...");

    strDivImage = '<img src="../assets/images/' + strGuessedMovie + '.jpg">';
    document.querySelector("#divImage").innerHTML = strDivImage;

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

