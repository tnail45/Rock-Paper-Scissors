



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

getComputerChoice();
