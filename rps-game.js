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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return [`Both chose ${playerSelection}! It's a Tie.`, null];
    } else if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'paper': 
                return ['Paper covers Rock! You won this round.', true];
                break;
            case 'scissors': 
                return ['Scissors smashed by Rock! You lost this round.', false]; 
                break;
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'scissors': 
                return ['Scissors cuts Paper! You won this round.', true]; 
                break;
            case 'rock': 
                return ['Rock covered by Paper! You lost this round.', false];
                break;
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock': 
                return ['Rock smashes Scissors! You won this round.', true]; 
                 break;
            case 'paper': 
                return ['Paper cut by Scissors! You lost this round.', false];
                 break;
            }
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Choose your fighter: Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection)[0];
        let roundWon = playRound(playerSelection, computerSelection)[1];
        if (roundWon !== null) {
            roundWon ? playerScore += 1 : computerScore += 1;
        }  
        console.log(roundResults, `\nYour score: ${playerScore}\nOpponent's Score: ${computerScore}`);
    }
    console.log(playerScore > computerScore ? "You Won!" : "You Lost!")
}

game();