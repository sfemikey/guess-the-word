const guessedLettersList = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

//Add an Async Function
const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    //fetching data from a text file instead of a JSON file
    const words = await response.text();
    //this is the delimiter you'll use to create the array
    const wordArray = words.split("\n");
    //console.log(wordArray);
    //create a variable to pull a random index from the wordArray
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    //pull out a random word from the array and remove any extra whitespace around the word
    word = wordArray[radomIndex].trim();
    placeholder(word);
};

    //Call the New Function
    getWord();

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
    message.innerText = "";
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
        message.innerText = "Please enter a letter.";  
    } else if (input.length > 1) {
        //if input is more than one letter
        message.innerText = "Please enter single letter.";  
    } else if (!input.match(acceptedLetter)) {
        //if they've entered a character that doesn't match the regular expression pattern
        message.innerText = "Please enter a letter from A to Z.";  
    } else {
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
        //Call the function inside the else statement
        countRemainingGuesses(guess);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

//Create a Function to Show the Guessed Letters
const showGuessedLetters = function () {
    //empty unordered list
    guessedLettersList.innerHTML = "";
    for (const letter of guessedLetters) {
        //Create a new list item for each letter inside your guessedLetters array
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

//Create a Function to Update the Word in Progress
const updateWordInProgress = function (guessedLetters) {
    // change the word variable to uppercase
    const wordUpper = word.toUpperCase();
    //create a variable to split the word string into an array
    const wordArray = wordUpper.split("");
    const showWord = [];
    for (const letter of wordArray) {
        //if the wordArray contains any letters from the guessedLetters array
        if (guessedLetters.includes(letter)) {
            //update the circle symbol with the correct letter.
            showWord.push(letter.toUpperCase());
        } else {
            showWord.push("●");
        }
    }
    //console.log(showWord);
    //use join() to update the empty paragraph where the word in progress will appear.
    wordInProgress.innerText = showWord.join("");
    //call this function to check if the player has won
    checkIfPlayerWon();
};

//create a function to count guesses remaining
const countRemainingGuesses = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        message.innerText = `Sorry,the word has no letter ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Great job! Letter ${guess} is in the word!`;
    }

    if (remainingGuesses === 0) {
        message.innerHTML = `Game Over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
};

//Create a Function to Check If the Player Won
const checkIfPlayerWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        //add the "win" class to the empty paragraph
        message.classList.add("win");
        //update the paragraph's contents
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};





