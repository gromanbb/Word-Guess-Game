// VARIABLES
// ==============================================================================
var wins = 0;
var displayMovie = [];
var numGuessesLeft = 12;
var maxGuessedLetters = 12;
var guessedLetters = [];
var arrLength = 0;
var diffLetters = 0;
var displayWins = [];
var displayGuessesLeft = [];
var displayGuessedLetters = [];


var disneyMovies = ["ZOOTOPIA", "MOANA", "TANGLED", "ALLADIN"];
/* "BRAVE", "INCREDIBLES", "MULAN", "RATATOUILLE", "HERCULES", "CINDERELLA", "POCAHONTAS", "ARISTOCATS", "PINOCCHIO", "FANTASIA", "MALEFICENT", "BAMBI", "PLANES", "FROZEN", "TARZAN" */

var compMovie = "";
var compIndex = 0;
var userLetter = "";
var isCapsLetter = false;
var guessedMovie = [];
var strGuessedMovie = "";
var strGuessedLetters = "";
var strEqualLetters = "";



// Retrieve unique characters from string
function getUniqueCharacters(str) {
    var result = {};

    for (var i = 0; i < str.length; i++) {
        if (str[i] != '_') result[str[i]] = 1;
    }
    return Object.keys(result).join("");
}

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


/*
compIndex = Math.floor(Math.random() * disneyMovies.length);
compMovie = disneyMovies[compIndex];
console.log("compIndex: " + compIndex);
console.log("Picked Movie: " + compMovie);
console.log("compMovie length " + compMovie.length);
*/

// ojo Debug!!!
compMovie = "MOANA";
console.log("Picked Movie: " + compMovie);
console.log("compMovie length " + compMovie.length);

for (var i = 0; i < compMovie.length; i++) {
    displayMovie[i] = "_";
    console.log("displayMovie[" + i + "]: " + displayMovie[i]);
    guessedMovie[i] = "_";
    console.log("guessedMovie[" + i + "]: " + guessedMovie[i]);
}

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
            numGuessesLeft = 12;
            console.log("G A N E !!!");
        } else {
            if (numGuessesLeft === 0) {
                console.log("P E R D I !!!");
            }
        }
    }   // End else isCapsLetter
}   // End onkeyup event








    






