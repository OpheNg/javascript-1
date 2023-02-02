let playerSelection= prompt('What will you chose? :\n - rock\n - paper\n -scissors');
let playerName= prompt();

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerSelection = 
}