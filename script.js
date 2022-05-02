function computerPlay() {
    let rand = Math.floor(Math.random() * 3);   //create random integer between 0 and 2
    const values = ["Rock", "Paper", "Scissors"]    //array with values
    return values[rand];    //return randomly chosen value from array
}

