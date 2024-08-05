



function getComputerChoice() {
    let x = Math.floor(Math.random() * 10);
    if (x <= 3) {
        console.log("Rock")
    }
    else if (x <= 6) {
        console.log("Paper")
    }
    else {
        console.log("Scissors")
    }

}


function getHumanChoice () {
    let entry = prompt("Rock, Paper, or Scissors?")
    entry = entry.toLowerCase();
    if (entry == "rock") {
        console.log("rock")
    }
    else if (entry == "paper") {
        console.log("paper")
    }
    else if (entry == "scissors") {
        console.log("scissors")
    }
    else {
        console.log("Invalid entry!")
    }
}
