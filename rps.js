let playerScore = 0;
let compScore = 0;
let winner = "";

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
  if (roundResult === "You Win!") playerScore++;
  console.log("Your Score is ", playerScore);
  return playerScore;
} // This function gets the players score based on the round result

function getCompScore(roundResult) {
  if (roundResult === "You Lose!") compScore++;
  console.log("Computer Score is ", compScore);
  return compScore;
} // This function gets the computers score based on the round result

function getScore() {
  getPlayerScore(roundResult);
  getCompScore(roundResult);
  console.log("Score ", playerScore, " - ", compScore);
  score.textContent = `${playerScore} - ${compScore}`;
} // This function compares the player and computers score

function letWinner() {
  if (compScore === 5) {
    winner = "Computer takes Victory!";
    compScore = 0;
    playerScore = 0;
  } else if (playerScore === 5) {
    winner = "You take Victory!";
    playerScore = 0;
    compScore = 0;
  }
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
    roundResult = "You Win!";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    roundResult = "You Lose!";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    roundResult = "You tied, that's lame!";
  else roundResult = "Check your spelling!";
  console.log(roundResult);
  if ((winner = "Computer takes Vicroty" || "You take Victory!")) {
    winner = "";
  }
  return roundResult;
} // This function plays the round and declares the winner

function playRock(playerScore, compScore) {
  playRound((playerSelection = "rock"), letComputerChoose());
  getScore();
  letWinner();
}

function playPaper(playerScore, compScore) {
  playRound((playerSelection = "paper"), letComputerChoose());
  getScore();
  letWinner();
}

function playScissors(playerScore, compScore) {
  playRound((playerSelection = "scissors"), letComputerChoose());
  getScore();
  letWinner();
}

const rockBtn = document.querySelector(".rock");

rockBtn.addEventListener("click", (e) => {
  playRock(playerScore, compScore);
});

const paperBtn = document.querySelector(".paper");

paperBtn.addEventListener("click", (e) => {
  playPaper(playerScore, compScore);
});

const scissorsBtn = document.querySelector(".scissors");

scissorsBtn.addEventListener("click", (e) => {
  playScissors(playerScore, compScore);
});

const score = document.querySelector(".score");
