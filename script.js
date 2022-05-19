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

let playerScore = 0;
let computerScore = 0;
let draws = 0;
let rounds = 0;



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const point = play(button.id, computerPlay());
        rounds++;
        if (point === 0) {
            draws++;
            document.getElementById('draws').textContent = draws;
        } else if (point === 1) {
            playerScore++;
            document.getElementById('playerScore').textContent = playerScore;
        } else {
            computerScore++;
            document.getElementById('computerScore').textContent = computerScore;
        }
        
        if (rounds === 5) {
            if (playerScore > computerScore) {  
                document.getElementById('endScore').textContent = "You win!";                
            } else if (computerScore > playerScore) {
                document.getElementById('endScore').textContent = "Computer wins!";                
            } else {
                document.getElementById('endScore').textContent = "Draw!";
            }
            
        }
    });
});