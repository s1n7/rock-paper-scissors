function computerPlay() {
    let rand = Math.floor(Math.random() * 3);   //create random integer between 0 and 2
    const values = ["rock", "paper", "scissors"]    //array with values
    return values[rand];    //return randomly chosen value from array
}

let playerInput = prompt("Please enter your choice: Rock, paper, or scissors").toLowerCase()

function play(playerSelection, computerSelection) {
    
    

    return playerSelection + computerSelection
}

console.log(play(playerInput, computerPlay()))
