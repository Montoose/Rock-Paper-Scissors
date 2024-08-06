let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getComputerChoice() {
    let number = Math.round(Math.random() * 100);
    if (number <= 33) {
        console.log("Computer chose Scissors!")
        return "scissors";
    }
    else if (number > 33 && number <= 66) {
        console.log("Computer chose Rock!")
        return "rock";
    }
    else {
        console.log("Computer chose Paper!")
        return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Make your choice! ");
    return choice.toLowerCase();
}

function playRound (computer, human) {
    if (human == computer) {
        console.log("We have a tie!");
    }
    else if (human == "rock" && computer == "paper") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (human == "rock" && computer == "scissors") {
        console.log("Human Wins!");
        humanScore++;
    }
    else if (human == "paper" && computer == "rock") {
        console.log("Human Wins!");
        humanScore++;
    }
    else if (human == "paper" && computer == "scissors") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (human == "scissors" && computer == "rock") {
        console.log("Computer Wins!");
        computerScore++;
    }
    else if (human == "scissors" && computer == "paper") {
        console.log("Human Wins!");
        humanScore++;
    }
}

playRound(humanChoice, computerChoice);