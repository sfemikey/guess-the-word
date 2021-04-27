const guessedLettersList = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messageText = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Write a Function to Add Placeholders for Each Letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//Add an Event Listener for the Button
guessLetterButton.addEventListener("click", function (e) {
    //prevent the default behavior of clicking a button
    e.preventDefault();   
    messageText.innerText = "";
    //grab what was entered in the input
    const guess = letterInput.value;
    //validate to make sure that it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    //empty the value of the input
    letterInput.value = "";  
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    //use conditional block to check for different scenarios
    if (input.length === 0) {
        //if input is empty
        messageText.innerText = "Please enter a letter.";  
    } else if (input.length > 1) {
        //if input is more than one letter
        messageText.innerText = "Please enter single letter.";  
    } else if (!input.match(acceptedLetter)) {
        //if they've entered a character that doesn't match the regular expression pattern
        messageText.innerText = "Please enter a letter from A to Z.";  
    }else {
        //If all the other conditions aren't met
     return input;  
    }
};

//Create a Function to Capture Input
const makeGuess = function (guess) {
    //converting your letter parameter to uppercase
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        //if they already guessed that letter
        message.innerText = "Sorry! you already guessed that letter, please try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }

};



