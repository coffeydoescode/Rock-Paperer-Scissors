function getRandomInt(max) {
  return (choice = Math.floor(Math.random() * max));
} // This function returns a random number between 0 and 2

function assign() {
  if (choice === 0) result = "rock";
  else if (choice === 1) result = "paper";
  else result = "scissors";
  return result;
} // // This function takes that number and assigns the variable result a value of rock, paper,
// // or scissors based on the random number

function letComputerChoose() {
  getRandomInt(3);
  // console.log(choice);
  assign(choice);
  // console.log(result);
  computerSelection = result;
} // This function gets a choice of rock, paper or scissors from the computer

// TEST
// letComputerChoose();
// console.log(computerSelection);

function letPlayerChoose() {
  playerSelectionOld = window.prompt(
    "Chooose Your Weapon! Rock, Paper, or Scissors",
    "ROCK"
  );
  return playerSelectionOld;
} // This function prompts the user to input a choice of rock, paper, or scissors

function makeLower() {
  return (playerSelection = playerSelectionOld.toLowerCase());
} // This function takes the variable playerSelectionDirty and makes the string lower case

function getPlayerChoice() {
  letPlayerChoose();
  makeLower();
  return playerSelection;
} // This fucntion takes user input and makes it lower case

// letPlayerChoose();
// console.log(playerSelectionOld);

// makeLower();
// console.log(playerSelection);

// getPlayerChoice();
// console.log(playerSelection);

function playRound() {
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

function testRound() {
  if (playerSelection === "rock" && computerSelection === "rock")
    result = "Cash Money! $$$";
  else result = "FAIL";
  return result;
}
// testRound(getPlayerChoice(), letComputerChoose());
// console.log(result);
// console.log(playerSelection);
// console.log(computerSelection);

// TEST
// playRound(getPlayerChoice(), letComputerChoose());
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(gameResult);

// This code plays the round and declares the winner

function game() {
  playRound(getPlayerChoice(), letComputerChoose());
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(gameResult);
}
game();
// getPlayerChoice();
// console.log(playerSelection);

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(gameResult);
