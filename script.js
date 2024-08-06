
let humanScore = 0;
let computerScore = 0;
let gameScore = 0;

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

function getHumanChoice () {
    let entry = prompt("Rock, Paper, or Scissors?")
    return entry;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    if ((humanChoice == "rock") && (computerChoice == "scissors") || (humanChoice == "paper") && (computerChoice == "rock") || (humanChoice == "scissors") && (computerChoice == "paper")) {
        return alert("You won this round"), (humanScore++, gameScore++)
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper") || (humanChoice == "paper") && (computerChoice == "scissors") || (humanChoice == "scissors") && (computerChoice == "rock")) {
        return alert("The computer won this round!"), (computerScore++, gameScore++)
    }
    else {
        return alert("Tie!")
    }
}

function playGame() {
    while (gameScore < 5) {
        playRound()
    }
    if ((gameScore >= 5) || (humanScore >= 3)) {
        alert("You won the game!")
    }
    else if ((gameScore >= 5) || (computerScore >= 3)) {
        alert("The computer won the game")
    }
}
playGame();