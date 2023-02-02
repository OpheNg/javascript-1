let playerSelection= prompt('What will you chose? :\n - rock\n - paper\n -scissors').toLowerCase();
let playerName= prompt("What's your name ?");

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return `${playerSelection} cannot beat ${computerSelection} because they are same`;
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! sSissors beats Paper";
    }
}

