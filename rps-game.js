const results = document.querySelector('.results');
const score = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let playerSelection = button.innerText;
    button.addEventListener('click', () => playRound(playerSelection));
});

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {

        results.textContent = `You both chose ${playerSelection}! It's a Tie.`;
    } 

    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {

        results.textContent = (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
        ${playerSelection} beats ${computerSelection}! You won this round.`);
        updateScore('player won');
    } 

    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {

        results.textContent =  (`You chose ${playerSelection} and your opponent chose ${computerSelection}.
        ${playerSelection} is beaten by ${computerSelection}! You lost this round.`);
        updateScore('computer won');
    }
}

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

function updateScore (roundResult) {
    if (roundResult === 'player won') {
        playerScore++;
        score.textContent = (
            `Your Score: ${playerScore}
            Opponent's Score: ${computerScore}`
        );
        if (playerScore === 5) {
            score.textContent = (
                `Score limit reached! You won the game!
                Your Final Score: ${playerScore}
                Opponent's Final Score: ${computerScore}`
            );
            disableButtons();
        }
    } 
    else if (roundResult === 'computer won') {
        computerScore++;
        score.textContent = (
            `Your Score: ${playerScore}
            Opponent's Score: ${computerScore}`
        );
        if (computerScore === 5) {
            score.textContent = (
                `Score limit reached! You lost the game.
                Your Final Score: ${playerScore}
                Opponent's Final Score: ${computerScore}`
            );
            disableButtons();
        }
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}


