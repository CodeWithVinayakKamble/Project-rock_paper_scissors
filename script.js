function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) return "rock";
    if (computerChoice === 2) return "paper";
    if (computerChoice === 3) return "scissors";
}

function getHumanChoice() {
    const humanChoice = prompt("Enter Your Choice : Rock | Paper | Scissors").toLowerCase();
    if (humanChoice === "rock") return "rock";
    if (humanChoice === "paper") return "paper";
    if (humanChoice === "scissors") return "scissors";
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tieCount = 0;

    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            tieCount++;
            alert(`Round Tie !! both chose : ${humanSelection}`)
        } else if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")) {
            humanScore++;
            alert(`You won This Round You : ${humanSelection} || Comp : ${computerSelection}`)
        } else {
            computerScore++;
            alert(`Computer won This Round You : ${humanSelection} || Comp : ${computerSelection}`)
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        alert(`You won !! Your Score : ${humanScore} and Comp Score : ${computerScore} and tieCount : ${tieCount}`)
    } else if (computerScore > humanScore) {
        alert(`Comp Won !! Comp Score : ${computerScore} and Your Score : ${humanScore} and tieCount : ${tieCount}`)
    } else {
        alert(`It's Tie !! No one Won and tieCount : ${tieCount}`)
    }
}
playGame()
