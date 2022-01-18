function getRandomInt(max) {
  return (choice = Math.floor(Math.random() * max));
} // This function returns a random number between 0 and 2

function assign() {
  if (choice === 0) result = "rock";
  else if (choice === 1) result = "paper";
  else result = "scissors";
  return result;
} /* This function takes that number and assigns the variable result a value of rock, paper,
or scissors based on the random number */

function letComputerChoose() {
  getRandomInt(3);
  // console.log(choice);
  assign(choice);
  // console.log(result);
  computerSelection = result;
} // This function gets a choice of rock, paper or scissors from the computer

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
  setPlayerScore();
  return gameResult;
} // This code plays the round and declares the winner

function game() {
  playRound(getPlayerChoice(), letComputerChoose());
  // console.log(playerSelection);
  // console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  // console.log(playerSelection);
  // console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  // console.log(playerSelection);
  // console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  // console.log(playerSelection);
  // console.log(computerSelection);
  console.log(gameResult);
  playRound(getPlayerChoice(), letComputerChoose());
  // console.log(playerSelection);
  // console.log(computerSelection);
  console.log(gameResult);
} // This function plays 5 rounds

// game();

function setPlayerScore() {
  if ((gameResult = "You Win!"));
  ++playerScore;
  console.log(gameResult);
  console.log("Your Score is ", playerScore);
}

// setPlayerScore((gameResult = "You Win!"), (playerScore = 0));

function testGame() {
  let playerScore = 0;
  playRound((playerSelection = "rock"), (computerSelection = "scissors"));
  playRound((playerSelection = "rock"), (computerSelection = "scissors"));
  playRound((playerSelection = "rock"), (computerSelection = "scissors"));
  playRound((playerSelection = "rock"), (computerSelection = "scissors"));
  playRound((playerSelection = "rock"), (computerSelection = "scissors"));
  // setPlayerScore(gameResult, (playerScore = 0));
}
// let playerScore = 0;
// testGame((playerScore = 0));

// setPlayerScore((gameResult = "You Win!"), (playerScore = 99));
// console.log(gameResult);
// console.log(playerScore);
