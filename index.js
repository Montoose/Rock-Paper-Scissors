/* This program allows you to play Rock-Paper-Scissors within the browser console. */

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.round(Math.random() * 100);
    if (number <= 33) {
        return "scissors";
    }
    else if (number > 33 && number <= 66) {
        return "rock";
    }
    else {
        return "paper";
    }
}

function playRound (computer, human) {
    if (human == computer) {
    }
    else if (human == "rock" && computer == "paper") {
        return 0;
    }
    else if (human == "rock" && computer == "scissors") {
        return 1;
    }
    else if (human == "paper" && computer == "rock") {
        return 1;
    }
    else if (human == "paper" && computer == "scissors") {
        return 0;
    }
    else if (human == "scissors" && computer == "rock") {
        return 0;
    }
    else if (human == "scissors" && computer == "paper") {
        return 1;
    }
}

function decideWinner() {
    if (humanScore > computerScore) console.log("Human wins!");
    else console.log("Computer Wins!");
}

function playGame(playerChoice) {

    if (humanScore <= 5 && computerScore <= 5) {
        let humanChoice = playerChoice;
        console.log(playerChoice);
        let computerChoice = getComputerChoice();
        let winner = playRound(computerChoice, humanChoice);

        if (winner == 1) humanScore++;
        else computerScore++;
    }
    else {
        decideWinner();
    }
    }

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
    

