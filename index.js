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

console.log(getComputerChoice());