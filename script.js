function computerPlay() {
    let rand = Math.floor(Math.random() * 3);   //create random integer between 0 and 2
    const values = ["rock", "paper", "scissors"]    //array with values
    return values[rand];    //return randomly chosen value from array
}

let playerInput = prompt("Please enter your choice: Rock, paper, or scissors").toLowerCase()

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Looks like a draw! The computer also chose " + playerSelection + ".";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You loose! Rock beats Scissors.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You loose! Paper beats Rock.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You loose! Scissors beats Paper.";
    } else {
        return "Please enter a valid value.";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        play(playerInput, computerPlay());
    }
}
