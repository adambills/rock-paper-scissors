const div = document.querySelector('div');


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        //Update score
        div.textContent = `You both chose ${playerSelection}! It's a Tie.`;
    } 
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        //Update score
        div.textContent = (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
        ${playerSelection} beats ${computerSelection}! You won this round.`);
    } 
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        //Update score
        div.textContent =  (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
        ${playerSelection} is beaten by ${computerSelection}! You lost this round.`);
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
    let playerSelection = button.innerText;
    button.addEventListener('click', () => playRound(playerSelection));
});