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

    let userChoice = prompt("Rock, Paper, Scissors??").toLowerCase(); // take case-insensitive user choice

    // prevent user from entering invalid choice
    while (userChoice === "" || !choices.map(choice => choice.toLowerCase()).includes(userChoice)) {
        userChoice = prompt("Invalid choice. Try again!\nRock, Paper, Scissors??").toLowerCase();
    }
    return (userChoice.charAt(0).toUpperCase() + userChoice.slice(1)); //case first letter
}

// play single round of game
function playRound(playerSelection, computerSelection) {
    let tie = playerSelection === computerSelection;
    let playerWIn = (playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper");

    // print result for the round
    if (tie) {
        console.log(`It's a tie! You both chose ${playerSelection}`);
        return "tie";
    } else {
        playerWIn ?
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`) :
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return playerWIn;
    };
}

// play multiple rounds of game
function game() {
    let maxScore = 5
    let playerScore = 0;
    let computerScore = 0;

    // play five rounds of game
    while (playerScore < maxScore && computerScore < maxScore) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

    // update score
        if (result === "tie") {
        } else { result ?
            playerScore++ : //
            computerScore++ };
    };
    
    // print final results
    console.log(`Final Score:\nPlayer = ${playerScore}\nComputer = ${computerScore}`)
}

game();