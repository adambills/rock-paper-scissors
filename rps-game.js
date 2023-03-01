function getComputerChoice () {
    let intChoice = Math.floor(Math.random() / 0.3333 + 1);
    if (intChoice === 1) {
        return "rock"
    } 
    else if (intChoice === 2) {
        return "paper"
    } 
    else {
        return "scissors"
    }
}

let playerSelection = getComputerChoice();
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Both chose ${playerSelection}! It's a Tie.`;
    } else if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'paper': 
                return 'Paper covers Rock! You win this round.';
                break;
            case 'scissors': 
                return 'Scissors smashed by Rock! You lost this round.'; 
                break;
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'scissors': 
                return 'Scissors cuts Paper! You win this round.'; 
                break;
            case 'rock': 
                return 'Rock covered by Paper! You lost this round.';
                break;
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock': 
                return 'Rock smashes Scissors! You win this round.'; 
                 break;
            case 'paper': 
                return 'Paper cut by Scissors! You lost this round.';
                 break;
            }
    } 
}