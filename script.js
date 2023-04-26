// create an array of possible choices
const choices = ["Rock", "Paper", "Scissors"];

// function for computer to randomly make a choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let choice = choices[randomIndex];
    console.log(choice);
}

getComputerChoice()