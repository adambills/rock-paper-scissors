function getComputerChoice () {
    let computerChoice;
    let intChoice = math.floor(math.Random() / 0.3333 + 1);
    if (intChoice === 1) {
        computerChoice = "rock";
    } else if (intChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}