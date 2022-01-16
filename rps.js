// let choice;
// let result;
function getRandomInt(max) {
  return (choice = Math.floor(Math.random() * max));
}
// getRandomInt(3);
// console.log(getRandomInt(3));
// console.log(choice);
// This code returns a random number between 0 and 2
// let choice = getRandomInt(3);

// if (choice === 0) result = "rock";
// else if (choice === 1) result = "paper";
// else result = "scissors";
// // This code takes that number and assigns the variable result a value of rock, paper,
// // or scissors based on the random number

// const computerSelection = computerPlay();
// This code defines the variable computerSelection as the computerPlay function
function assign(choice) {
  if (choice === 0) result = "rock";
  else if (choice === 1) result = "paper";
  else result = "scissors";
  return result;
}

// assign(choice);
// console.log(result);

function letComputerChoose() {
  getRandomInt(3);
  // console.log(choice);
  assign(choice);
  // console.log(result);
  return result;
}

function letPlayerChoose() {
  return (playerSelection = window.prompt(
    "Chooose Your Weapon! Rock, Paper, or Scissors"
  ));
} // This variable prompts the user to input a choice of Rock, Paper, or Scissors

// letPlayerChoose();
// console.log(playerSelection);

// console.log(playerSelection);
// let playerSelection = playerSelectionUnclean.toLowerCase();
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

// playRound(letPlayerChoose(), computerSelection);

// This code plays the round and declares the winner

function game() {
  playRound(letPlayerChoose(), letComputerChoose());
  console.log(playerSelection);
  console.log(result);
  console.log(gameResult);
  playRound(letPlayerChoose(), letComputerChoose());
  console.log(playerSelection);
  console.log(result);
  console.log(gameResult);
  playRound(letPlayerChoose(), letComputerChoose());
  console.log(playerSelection);
  console.log(result);
  console.log(gameResult);
  playRound(letPlayerChoose(), letComputerChoose());
  console.log(playerSelection);
  console.log(result);
  console.log(gameResult);
  playRound(letPlayerChoose(), letComputerChoose());
  console.log(playerSelection);
  console.log(result);
  console.log(gameResult);
}
game();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(gameResult);
