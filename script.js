

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let x = Math.floor(Math.random() * 10);
    if (x <=3) {
        return "rock";
    }
    else if (x <= 6) {
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
    if ((humanChoice == "rock") && (computerChoice == "rock")) {
        return alert("Tie!");
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        return alert("Computer wins!", computerScore++ )
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        return alert("You win!", humanScore++)
    }
    else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        return alert("You win!", humanScore++)
    }
    else if ((humanChoice == "paper") && (computerChoice == "paper")) {
        return alert("Tie!")
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        return alert("computer wins!", computerScore++)
    }
    else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        return alert("computer wins!", computerScore++)
    }
    else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        return alert("You win!", humanScore++)
    }
    else if ((humanChoice == "scissors") && (computerChoice == "scissors")) {
        return alert("Tie!")
    }
}
playRound();
console.log(computerScore);
console.log(humanScore);
