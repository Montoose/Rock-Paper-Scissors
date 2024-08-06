function getComputerChoice() {
    let number = Math.round(Math.random() * 100);
    if (number <= 33) {
        return "Scissors";
    }
    else if (number > 33 && number <= 66) {
        return "Rock";
    }
    else {
        return "Paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Make your choice! ");
    return choice
}

console.log(getComputerChoice());
console.log(getHumanChoice());