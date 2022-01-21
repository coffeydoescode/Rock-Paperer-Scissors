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
    "Chooose Your Weapon! Rock, Paper, or Scissors"
  );
  return playerSelectionOld;
} // This function prompts the user to input a choice of rock, paper, or scissors

function makeLower() {
  return (playerSelection = playerSelectionOld.toLowerCase());
} // This function takes the variable playerSelectionOld and makes the string lower case

function getPlayerChoice() {
  letPlayerChoose();
  makeLower();
  return playerSelection;
} // This fucntion takes user input and makes it lower case

function getPlayerScore(roundResult) {
  if (roundResult === "You Win!") ++playerScore;
  console.log("Your Score is ", playerScore);
  return playerScore;
} // This function gets the players score based on the round result

function getCompScore(roundResult) {
  if (roundResult === "You Lose!") ++compScore;
  console.log("Computer Score is ", compScore);
  return compScore;
} // This function gets the computers score based on the round result

function getScore() {
  getPlayerScore(roundResult);
  getCompScore(roundResult);
  console.log("Score ", playerScore, " - ", compScore);
} // This function compares the player and computers score

function letWinner() {
  if (compScore > playerScore) winner = "Computer takes Victory!";
  else if (playerScore > compScore) winner = "You take Victory!";
  else winner = "You tied!";
  console.log(winner);
  //   return winner;
} // This function declares the winner

function playRound() {
  if (playerSelection === "rock" && computerSelection === "scissors")
    roundResult = "You Win!";
  else if (playerSelection === "rock" && computerSelection === "paper")
    roundResult = "You Lose!";
  else if (playerSelection === "rock" && computerSelection === "rock")
    roundResult = "You tied, that's lame!";
  else if (playerSelection === "paper" && computerSelection === "paper")
    roundResult = "You tied, that's lame!";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    roundResult = "You Lose!";
  else if (playerSelection === "paper" && computerSelection === "rock")
    roundResult = "You Win!";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    roundResult = "You Win";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    roundResult = "You Lose!";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    roundResult = "You tied, that's lame!";
  else roundResult = "Check your spelling!";
  console.log(roundResult);
  return roundResult;
} // This function plays the round and declares the winner

function game() {
  playRound(getPlayerChoice(), letComputerChoose());
  getScore();
  getPlayerScore();
  playRound(getPlayerChoice(), letComputerChoose());
  getScore();
  playRound(getPlayerChoice(), letComputerChoose());
  getScore();
  playRound(getPlayerChoice(), letComputerChoose());
  getScore();
  playRound(getPlayerChoice(), letComputerChoose());
  getScore();
  letWinner();
} // This function plays 5 rounds, updates the score, and declares a winner

let winner = null;
// This global declaration is neccessary for game to function

game(((playerScore = 0), (compScore = 0)));
// playerScore and compScore must be defined for game to function

function testGame() {
  playRound((playerSelection = "rock"), (computerSelection = "rock"));
  console.log(roundResult);
  getScore();
  playRound((playerSelection = "rock"), (computerSelection = "rock"));
  getScore();
  playRound((playerSelection = "paper"), (computerSelection = "scissors"));
  console.log(roundResult);
  getScore();
  playRound((playerSelection = "paper"), (computerSelection = "scissors"));
  console.log(roundResult);
  getScore();
  playRound((playerSelection = "paper"), (computerSelection = "scissors"));
  console.log(roundResult);
  getScore();
  letWinner();
}

// testGame((playerScore = 0), (compScore = 0));
// This was a test to ensure all functions were working
