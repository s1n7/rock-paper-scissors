function computerPlay() {
    let rand = Math.floor(Math.random() * 3);   //create random integer between 0 and 2
    const values = ["rock", "paper", "scissors"]    //array with values
    return values[rand];    //return randomly chosen value from array
}

let playerInput = prompt("Please enter your choice: Rock, paper, or scissors").toLowerCase()

function play(playerSelection, computerSelection) {
    if (["rock", "paper", "scissors"].includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            return 0;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return 1;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return 1;
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            return 2;
        } else if (computerSelection === "paper" && playerSelection === "rock") {
            return 2;
        } else{
            return 2;
        }
    }
    return;

    
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let result;

    for (let i = 0; i < 5; i++) {
        result = play(playerInput, computerPlay())
        if( result === 0 ) {
            draws++;
            console.log("Draw!");
        } else if ( result === 1 ) {
            playerWins++;
            console.log("You win!");
        } else if ( result === 2 ) {
            computerWins++;
            console.log("You loose!");
        } else {
            i--;
        }
    }

    if (playerWins > computerWins) {
        return "You win! You beat the computer " + playerWins + " times!";
    } else if (computerWins > playerWins) {
        return "You loose! The computer beat you " + computerWins + " times!";
    } else {
        return "Looks like a draw."
    }
}