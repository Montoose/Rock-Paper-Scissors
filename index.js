/* This program allows you to play Rock-Paper-Scissors within the browser console. */

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let gameBoard = document.getElementById("playBoard");
let scoreBoard = document.getElementById("score");

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
    if (human === computer) {
        return 2;
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
    if (humanScore > computerScore) return true;
    else return false;
}

function processHumanChoice(choice) {
    let playerMove = document.createElement("p");
    playerMove.appendChild(document.createTextNode(`your selection... ${choice.toUpperCase()}\n`));
    gameBoard.appendChild(playerMove);
}

function processComputerChoice(choice) {
    let computerMove = document.createElement("p");
    computerMove.appendChild(document.createTextNode(`Computer has selected... ${choice.toUpperCase()}\n`));
    gameBoard.appendChild(computerMove);
    gameBoard.appendChild(document.createElement("br"));
}

function outputScore() {
    let points = document.createElement("p");
    points.appendChild(document.createTextNode(`Human: ${humanScore} Computer: ${computerScore}`));
    scoreBoard.replaceChildren(points);
    
}

function playGame(playerChoice) {

        let humanChoice = playerChoice;
        processHumanChoice(humanChoice);
        
        let computerChoice = getComputerChoice();
        processComputerChoice(computerChoice);

        let winner = playRound(computerChoice, humanChoice);

        if (winner == 0) computerScore++;
        else if (winner == 1) humanScore++;

        outputScore();
        
        if (humanScore == 5 || computerScore == 5) {
            gameBoard.replaceChildren()
            humanScore = 0;
            computerScore = 0;
        }
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
    

