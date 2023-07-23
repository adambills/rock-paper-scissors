function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2: 
            return 'scissors';
            break;
    } 
}

function playRound (playerSelection, computerSelection) {
    let playerResult;
    if (playerSelection === computerSelection) {
        playerResult = null;
        return [`Both chose ${playerSelection}! It's a Tie.`, playerResult];
    } else if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'paper':
                playerResult = true; 
                return ['Paper covers Rock! You won this round.', playerResult];
            case 'scissors': 
                return ['Scissors smashed by Rock! You lost this round.', playerResult]; 
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'scissors': 
                playerResult = true;
                return ['Scissors cuts Paper! You won this round.', playerResult]; 
            case 'rock': 
                return ['Rock covered by Paper! You lost this round.', playerResult];
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock': 
                playerResult = true;
                return ['Rock smashes Scissors! You won this round.', playerResult]; 
            case 'paper': 
                return ['Paper cut by Scissors! You lost this round.', playerResult];
            }
    } 
}

function playGame() {
    console.log("Rock, Paper, Scissors! Best 3 out of 5.")
    let playerScore = 0;
    let computerScore = 0;
    let roundCounter = 0;
    while (playerScore < 3 && computerScore < 3) {
        roundCounter++;
        let playerSelection = prompt("Choose your fighter: Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let resultMessage = playRound(playerSelection, computerSelection)[0];
        let playerResult = playRound(playerSelection, computerSelection)[1];
        if (playerResult !== null) {
            playerResult ? playerScore++ : computerScore++;
        }
        console.group(`Round ${roundCounter}`);
        console.log(`You chose ${playerSelection} and your opponent chose ${computerSelection}.`)
        console.log(resultMessage);
        console.log(`Your score: ${playerScore}`);
        console.log(`Opponent's Score: ${computerScore}`);
        console.groupEnd(`Round ${roundCounter}`);
    }
    console.log(playerScore > computerScore ? "Score Limit Reached! You Won!" : "Score Limit Reached! You Lost!")
}

playGame();