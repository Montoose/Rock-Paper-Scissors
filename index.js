/* This program allows you to play Rock-Paper-Scissors within the browser console. */

let humanScore = 0;
let computerScore = 0;


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
    if (choice == "scissors") {
        console.log("You chose scissors!");
    }
    else if (choice == "rock") {
        console.log("You chose rock!");
    }
    else {
        console.log("You chose paper!");
    }
    return choice.toLowerCase();
}

function playRound (computer, human) {
    if (human == computer) {
        console.log("We have a tie!");
    }
    else if (human == "rock" && computer == "paper") {
        console.log("Computer Wins!");
        return 0;
    }
    else if (human == "rock" && computer == "scissors") {
        console.log("Human Wins!");
        return 1;
    }
    else if (human == "paper" && computer == "rock") {
        console.log("Human Wins!");
        return 1;
    }
    else if (human == "paper" && computer == "scissors") {
        console.log("Computer Wins!");
        return 0;
    }
    else if (human == "scissors" && computer == "rock") {
        console.log("Computer Wins!");
        return 0;
    }
    else if (human == "scissors" && computer == "paper") {
        console.log("Human Wins!");
        return 1;
    }
}

function playGame() {
    
    let rounds = prompt("How many times do you want to play? ");

    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = playRound(computerChoice, humanChoice);
        if (winner == 1) {
            humanScore++;
        }
        else if (winner == 0) {
            computerScore++;
        }
    }

    console.log(`Human score is: ${humanScore}!`);
    console.log(`Computer score is: ${computerScore}!`);
}

playGame();

    

