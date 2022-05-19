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

const buttons = document.querySelectorAll('button');

const result = document.querySelector('.result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const point = play(button.id, computerPlay());
        result.textContent = point;  
    });
});

