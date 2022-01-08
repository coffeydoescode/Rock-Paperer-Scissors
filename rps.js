function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// This code returns a random number between 0 and 2
let choice = getRandomInt(3);
// console.log(choice);
let result;
if (choice === 0) result = "Rock";
else if (choice === 1) result = "Paper";
else result = "Scissors";
// This code takes that number and assigns the variable result a value of rock, paper,
// or scissors based on the random number
let resultCleaned = result.toLowerCase();
// console.log(resultCleaned);

function computerPlay() {
  return resultCleaned;
}
// This code defines the function computerPlay and returns the variable result, so that it returns rock, paper, or scissors
const computerSelection = computerPlay();
// This code defines the variable computerSelection as the computerPlay function

let playerSelectionUnclean = window.prompt(
  "Chooose Your Weapon! Rock, Paper, or Scissors"
);
let playerSelection = playerSelectionUnclean.toLowerCase();
// This code takes a user input and and assigns the value to playerSelection (the actual prompt for user input still needs to be added)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors")
    gameResult = "You Win!";
  else if (playerSelection === "rock" && computerSelection === "paper")
    gameResult = "You Lose!";
  else if (playerSelection === "rock" && computerSelection === "rock")
    gameResult = "You tied, that's lame!";
  else if (playerSelection === "paper" && computerSelection === "paper")
    gameResult = "You tied, that's lame!";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    gameResult = "You Lose!";
  else if (playerSelection === "paper" && computerSelection === "rock")
    gameResult = "You Win!";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    gameResult = "You Win";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    gameResult = "You Lose!";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    gameResult = "You tied, that's lame!";
  else gameResult = "Check your spelling!";

  return gameResult;
}

// playRound(playerSelection, computerSelection);
// This code plays the round and declares the winner

function game() {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}
game();

console.log(playerSelection);
console.log(computerSelection);
console.log(gameResult);
