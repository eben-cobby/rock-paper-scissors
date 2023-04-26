// create an array of possible choices
const choices = ["Rock", "Paper", "Scissors"];

// computer randomly makes a choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

//gets user's choice
function getPlayerChoice() {
    let userChoice = prompt("Rock? Paper? Scissors???").toLowerCase(); // take case-insensitive user choice
    return (userChoice.charAt(0).toUpperCase() + userChoice.slice(1)); //case first letter
}

// play single round of game
function playRound(playerSelection, computerSelection) {
    let tie = playerSelection === computerSelection
    let playerWIn = (playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")
    if (tie) {
        return `It's a tie! You both chose ${playerSelection}`
    } else {
        return playerWIn ? `You win! ${playerSelection} beats ${computerSelection}!` : `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}
// play multiple rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice())
    }
    if (playerScore === computerScore)
}

game();