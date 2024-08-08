// initialize global scores to 0
let humanScore = 0;
let computerScore = 0;
let gameScore = 0;

//function to retrive a random choice from the computer
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 10);
    if (randomChoice <= 3) {
        return "rock"
    }
    else if (randomChoice <= 6) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// function to retrive the human's input
function getHumanChoice () {
    let entry = prompt("Rock, Paper, or Scissors?")
    return entry;
}

// function to play a round by comparing the computer choice to the human choice and determining a round winner
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    if ((humanChoice == "rock") && (computerChoice == "scissors") || (humanChoice == "paper") && (computerChoice == "rock") || (humanChoice == "scissors") && (computerChoice == "paper")) {
        return console.log("You won this round"), (humanScore++, gameScore++)
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper") || (humanChoice == "paper") && (computerChoice == "scissors") || (humanChoice == "scissors") && (computerChoice == "rock")) {
        return console.log("The computer won this round!"), (computerScore++, gameScore++)
    }
    else {
        return console.log("Tie!")
    }
}
// function to play the entire game by looping until 5 round wins have been reached and comparing scores to determine the game winner
function playGame() {
    while (gameScore < 5) {
        playRound()
    }
    if ((gameScore >= 5) || (humanScore >= 3)) {
        console.log("You won the game!")
    }
    else if ((gameScore >= 5) || (computerScore >= 3)) {
        console.log("The computer won the game")
    }
}
playGame();