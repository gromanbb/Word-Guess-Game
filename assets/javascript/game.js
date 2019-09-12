// VARIABLES
// ==============================================================================

var disneyMovies = ["ZOOTOPIA", "INCREDIBLES", "HERCULES", "POCAHONTAS", "MOANA", "RATATOUILLE", "MALEFICENT", "MULAN", "TANGLED", "CINDERELLA", "PINOCCHIO", "ALLADIN", "PLANES", "FANTASIA", "ARISTOCATS", "FROZEN",  "TARZAN", "BAMBI", "BRAVE"]

var score = 0;
var wins = 0;

var compIndex = 0;
var compMovie = "";
var guessedMovie = [];
var displayMovie = [];

var maxGuessedLetters = 7;
var numGuessesLeft = 7;

var userLetter = "";
var isCapsLetter = false;

var guessedLetters = [];
var strGuessedLetters = "";

var arrLength = 0;
var diffLetters = 0;
var strGuessedMovie = "";
var strDisplayMovie = "";
var strEqualLetters = "";

var liveGame = true;

// FUNCTIONS
// ==============================================================================
function displayStats() {
    console.log("displayStats()--> Function executed");

    document.querySelector("#pWins").innerHTML = "<p>" + score + "</p>";
    document.querySelector("#pCurrentWord").innerHTML = "<p>" + strDisplayMovie + "</p>";
    document.querySelector("#pGuessesLeft").innerHTML = "<p>" + numGuessesLeft + "</p>";
    document.querySelector("#pLettersGuessed").innerHTML = "<p>" + strGuessedLetters + "</p>";
}

function pickRandomMovie() {
    console.log("pickRandomMovie()--> Function executed.");

    compIndex = 0;
    compMovie = "";
    guessedMovie = [];
    displayMovie = [];
    strDisplayMovie = "";

    compIndex = Math.floor(Math.random() * disneyMovies.length);
    compMovie = disneyMovies[compIndex];
    console.log("pickRandomMovie()--> compIndex: " + compIndex);
    console.log("pickRandomMovie()--> Picked Movie: " + compMovie);
    console.log("pickRandomMovie()--> compMovie length " + compMovie.length);

    for (var i = 0; i < compMovie.length; i++) {
        guessedMovie[i] = "_";
        // console.log("pickRandomMovie()-->  guessedMovie[" + i + "]: " + guessedMovie[i]);
        displayMovie[i] = "_" + " ";
        // console.log("pickRandomMovie()-->  displayMovie[" + i + "]: " + displayMovie[i]);
    }

}

function celebrateWin() {
    console.log("celebrateWin()--> Function executed");

    alert("You won!!!");
}

function displayGameOver() {
    console.log("displayGameOver()--> Function executed");

    alert("You lost! The movie was: " + compMovie);
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
console.log("Main--> Start game!");

pickRandomMovie();
strDisplayMovie = displayMovie.join("");
displayStats();


document.onkeyup = function (event) {
    if (liveGame) {
        document.querySelector("#divImage").innerHTML = '<img src="">';
        // console.log("onkeyup event!");
        
        userLetter = event.key.toUpperCase();
        // console.log("userLetter: " + userLetter);

        // Validate that user keyed only letters
        isCapsLetter = isLetter(userLetter);
        if (!isCapsLetter) {
            console.log("Only letters are allowed. Try again!");
        } else {

            for (var i = 0; i < compMovie.length; i++) {
                if (userLetter === compMovie[i]) {
                    guessedMovie[i] = userLetter;
                    displayMovie[i] = userLetter + " ";
                }
            }
            strGuessedMovie = guessedMovie.join("");
            // console.log("strGuessedMovie: " + strGuessedMovie + "; strGuessedMovie.length: " + strGuessedMovie.length);
            strDisplayMovie = displayMovie.join("");
            // console.log("strDisplayMovie: " + strDisplayMovie + "; strDisplayMovie.length: " + strDisplayMovie.length);

            arrLength = 0;
            diffLetters = 0;
            strGuessedLetters = "";
            strEqualLetters = "";

            arrLength = guessedLetters.length;
            for (var j = 0; j < arrLength; j++) {
                if (userLetter !== guessedLetters[j]) {
                    diffLetters++;
                }
                else {
                    alert("You already typed the letter --> " + userLetter + "!");
                }
            }

            if (diffLetters === arrLength) {
                guessedLetters.push(userLetter);
                strGuessedLetters = guessedLetters.join("");
            }

            strGuessedLetters = guessedLetters.join("");
            // console.log("strGuessedLetters: " + strGuessedLetters + "; strGuessedLetters.length: " + strGuessedLetters.length);
            strEqualLetters = getUniqueCharacters(guessedMovie);
            // console.log("strEqualLetters: " + strEqualLetters + "; strEqualLetters.length: " + strEqualLetters.length);
            numGuessesLeft = maxGuessedLetters - (strGuessedLetters.length - strEqualLetters.length);
            // console.log("numGuessesLeft: " + numGuessesLeft + "; strGuessedLetters.length: " + strGuessedLetters.length + "; strEqualLetters.length: " + strEqualLetters.length);

            strDisplayMovie = displayMovie.join("");        
            displayStats();

            if (strGuessedMovie === compMovie) {
                wins++;
                score = score + wins;
                document.querySelector("#divImage").innerHTML = '<img src="assets/images/' + strGuessedMovie + '.jpg">';

                displayStats();
                celebrateWin();

                wins = 0;
                numGuessesLeft = maxGuessedLetters;
                guessedLetters = [];
                guessedMovie = [];
                displayMovie = [];
                strGuessedLetters = "";
                strEqualLetters = "";
                strGuessedMovie = "";
                strDisplayMovie = "";

                pickRandomMovie();
                displayStats();
            
            } else {
                if (numGuessesLeft === 0) {
                    wins = 0;

                    displayStats();
                    document.querySelector("#divImage").innerHTML = '<img src="assets/images/' + compMovie + '.jpg">';
                    displayGameOver();
                    liveGame = false;
                }
            }   // End else strGuessedMovie

        }   // End else isCapsLetter

    }   // End liveGame

}   // End onkeyup event

