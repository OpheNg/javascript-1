let playerName= prompt("What's your name ?");

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let player=0;
let computer=0;

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return `${playerSelection} cannot beat ${computerSelection} because they are same`;
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        player++;
        return "You Win! Rock beats Scissors";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computer++;
        return "You Lose! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        player++;
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computer++;
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computer++;
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        player++;
        return "You Win! Scissors beats Paper";
    }
}

function game(){
    for(let i=0; i < 5 ; i++){
        let playerSelection= prompt('What will you chose? :\n - rock\n - paper\n -scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();