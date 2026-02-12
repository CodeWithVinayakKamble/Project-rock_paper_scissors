function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) return "rock";
    if (computerChoice === 2) return "paper";
    if (computerChoice === 3) return "scissors";
};

function getHumanChoice() {
    const humanChoice = prompt("Enter Your Choice : Rock | Paper | Scissors").toLowerCase();
    if (humanChoice === "rock") return "rock";
    if (humanChoice === "paper") return "paper";
    if (humanChoice === "scissors") return "scissors";
};

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "tie"
    } else if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")) {
        return "human"
    } else {
        return "computer"
    }
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
const roundResult = playRound(humanSelection, computerSelection);

function playGame(result) {
    let humanScore = 0;
    let computerScore = 0;
    let counter = 0
    if (result === "human" && (counter => 0 && counter <= 5)) {
        humanScore++;
        counter++;
        return playRound(humanSelection, computerSelection)
    }
}
playGame(roundResult)
