// Testing JavaScript

console.log("JavaScript Test...");


// Caching the DOM
// This means storing things (variables) for future use
// This provides better performance for the web
// Storing the variable just once and then use it as many times as you want
// Explanation = https://youtu.be/jaVNP3nIAv0?t=1871

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Functions

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock ✊";
    if (letter === 'p') return "Paper ✋";
    if (letter === 's') return "Scissors ✌";
}

function win(userChoiceI, computerChoiceI) {
    const smallUserWord = "User".fontsize(3).sup();
    const smallComputerWord = "Computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoiceI);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoiceI)}${smallUserWord} beats ${convertToWord(computerChoiceI)}${smallComputerWord} YOU WIN 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')} , 300);
}

function loose(userChoiceI, computerChoiceI) {
    const smallUserWord = "User".fontsize(3).sup();
    const smallComputerWord = "Computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoiceI);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoiceI)}${smallUserWord} looses to ${convertToWord(computerChoiceI)}${smallComputerWord} YOU LOST... 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')} , 300);
}

function draw(userChoiceI, computerChoiceI) {
    const userChoice_div = document.getElementById(userChoiceI);
    const smallUserWord = "User".fontsize(3).sup();
    const smallComputerWord = "Computer".fontsize(3).sup();
    result_p.innerHTML = `You both choose ${convertToWord(userChoiceI)}${smallUserWord} ITS A DRAW 😐`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow')} , 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice => " + userChoice);
    console.log("computer choice => " + computerChoice);
    // Switch statements
    // Make things easier (sometimes) than if statements
    // Explanation = https://youtu.be/jaVNP3nIAv0?t=2839
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}




// Functions Call

getComputerChoice();
main();
