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
function computerPlay() {
  return result;
}
// This code defines the function computerPlay and returns the variable result, so that it returns rock, paper, or scissors
const computerSelection = computerPlay();
// This code places defines the variable computerSelection as the computerPlay function
let playerSelection = "Rock";
// This code takes a user input and and assigns the value to playerSelection (the actual prompt for user input still needs to be added)

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
// This code plays the round and declares the winner
console.log(playerSelection);
console.log(computerSelection);
console.log(gameResult);
