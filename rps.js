function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let choice = getRandomInt(3);
// console.log(choice);
let result;
if (choice === 0) result = "Rock";
else if (choice === 1) result = "Paper";
else result = "Scissors";

function computerPlay() {
  return result;
}

const computerSelection = computerPlay();

let playerSelection = "Rock";

// let gameResult;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors")
    gameResult = "You Win!";
  else if (playerSelection === "Rock" && computerSelection === "Paper")
    gameResult = "You Lose!";
  else if (playerSelection === "Rock" && computerSelection === "Rock")
    gameResult = "You tied, that's lame!";
  else gameResult = "You haven't defined that outcome!";
  {
    return gameResult;
  }
}

playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);
console.log(gameResult);
