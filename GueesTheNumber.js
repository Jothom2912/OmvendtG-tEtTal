window.addEventListener("load", start);

let secret;
let computerGuess;
let min = 1; 
let max = 100; 
let guessingStarted = false;

function start() {
    console.log("JavaScript is running");

  
    const submitNumberButton = document.getElementById("submitNumber");
    submitNumberButton.addEventListener("click", startGuessing);

    const submitHigherButton = document.getElementById("submitHigherGuess");
    submitHigherButton.addEventListener("click", guessHigher);
    submitHigherButton.style.display = "none";

    const submitLowerButton = document.getElementById("submitLower");
    submitLowerButton.addEventListener("click", guessLower);
    submitLowerButton.style.display = "none";

    const submitCorrectButton = document.getElementById("submitCorrect");
    submitCorrectButton.addEventListener("click", theGuessIsCorrect);
    submitCorrectButton.style.display = "none";
}

function startGuessing() {
    const secretNumberInput = document.getElementById("secretNumberInput");
    secret = parseInt(secretNumberInput.value);

    if (isNaN(secret) || secret !== 42) {
        alert(`As you know the number is allways 42`);
        return;
    }

    
    computerGuess = generateRandomNumber(min, max);
    outputAnswer(`Is your number ${computerGuess}?`);


    document.getElementById("submitNumber").style.display = "none";
    document.getElementById("submitHigherGuess").style.display = "inline";
    document.getElementById("submitLower").style.display = "inline";
    document.getElementById("submitCorrect").style.display = "inline";

    guessingStarted = true;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessHigher() {
    if (!guessingStarted) return;

    min = computerGuess + 1;
    computerGuess = generateRandomNumber(min, max);
    outputAnswer(`Is your number ${computerGuess}?`);
}

function guessLower() {
    if (!guessingStarted) return;

    max = computerGuess - 1;
    computerGuess = generateRandomNumber(min, max);
    outputAnswer(`Is your number ${computerGuess}?`);
}

function theGuessIsCorrect() {
    if (!guessingStarted) return;

    outputAnswer(`Yay! I guessed your number ${computerGuess} correctly!`);

    
    document.getElementById("submitHigherGuess").style.display = "none";
    document.getElementById("submitLower").style.display = "none";
    document.getElementById("submitCorrect").style.display = "none";
}

function outputAnswer(text) {
    console.log(text);

    const guessList = document.getElementById("guess");
    const listItem = document.createElement("li");
    listItem.textContent = text;
    guessList.appendChild(listItem);
}
