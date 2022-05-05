function computerPlay() {   // function to create random value
    let rand = Math.floor(Math.random() * 3);   //create random integer between 0 and 2
    const values = ["rock", "paper", "scissors"];   
    return values[rand];    //return randomly chosen value from array
}

function play(playerSelection, computerSelection) {
    while (["rock", "paper", "scissors"].includes(playerSelection)) {   //check if user input is valid
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

function game() {   //game function to play 5 rounds 
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    const results = []; //array with result of each round

    for (let i = 0; i < 5; i++) {   //loop for 5 rounds
        let playerInput = prompt("Please enter your choice: Rock, paper, or scissors").toLowerCase()
        results[i] = play(playerInput, computerPlay())  //save round's result in array
        if (results[i] === 0) {
            draws++;
            console.log("Draw!");
        } else if (results[i] === 1) {
            playerWins++;
            console.log("You win!");
        } else if (results[i] === 2) {
            computerWins++;
            console.log("You loose!");
        } else {
            console.log("Enter a valid value.");
        }
    }

    if (playerWins > computerWins) {    //check who has more wins 
        return "You win! You beat the computer " + playerWins + " times!";
    } else if (computerWins > playerWins) {
        return "You loose! The computer beat you " + computerWins + " times!";
    } else {
        return "Looks like a draw.";
    }
}

console.log(game());