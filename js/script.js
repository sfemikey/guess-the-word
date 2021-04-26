//Create Global Variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessLettersSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//Write a Function to Add Placeholders for Each Letter
const placeholder = function(word) {
    const letterPlaceholder = [];
    for (const letter of word) {
        letterPlaceholder.push("●");
    }
    wordInProgress.innerText = letterPlaceholder.join("");
};

placeholder(word);

//Add an Event Listener for the Button
guessButton.addEventListener("click", function (e) {
    //prevent the default behavior of clicking a button
    e.preventDefault();   
    const guess = textInput.value;
    console.log(guess);   //Log out the value of the variable capturing the input
    textInput.value = "";  //empty the value of the input
});



