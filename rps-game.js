function getComputerChoice() {
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

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        //Add results message to DOM and update score
        //results message: `You both chose ${playerSelection}! It's a Tie.`;
    } 
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        //Add results message to DOM and update score
        //results message: (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
        //${playerSelection} beats ${computerSelection}! You won this round.`);
    } 
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
       //Add results message to DOM and update score
        //results message: (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
       // ${playerSelection} is beaten by ${computerSelection}! You lost this round.`);
    }
}
/*
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
roundCounter++;
let playerSelection = prompt("Choose your fighter: Rock, Paper, or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();
let resultMessage = playRound(playerSelection, computerSelection)[0];
let playerResult = playRound(playerSelection, computerSelection)[1];
console.group(`Round ${roundCounter}`);
console.log(`You chose ${playerSelection} and your opponent chose ${computerSelection}.`)
console.log(resultMessage);
console.log(`Your score: ${playerScore}`);
console.log(`Opponent's Score: ${computerScore}`);
console.groupEnd(`Round ${roundCounter}`);
console.log(playerScore > computerScore ? "Score Limit Reached! You Won!" : "Score Limit Reached! You Lost!")
*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let playerSelection = button.innerText.toLowerCase();
    button.addEventListener('click', playRound(playerSelection));
});