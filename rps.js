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

function getPlayerScore(roundResult) {
  if (roundResult === "You Win!") playerScore++;
  console.log("Your Score is ", playerScore);
  // roundWinner.textContent = "You Scored!";
  // scoreBox.classList.toggle("win");
  return playerScore;
} // This function gets the players score based on the round result

function getCompScore(roundResult) {
  if (roundResult === "You Lose!") compScore++;
  console.log("Computer Score is ", compScore);
  // scoreBox.classList.toggle("lose");
  // roundWinner.textContent = "Computer Scored!";
  return compScore;
} // This function gets the computers score based on the round result

function getScore() {
  getPlayerScore(roundResult);
  getCompScore(roundResult);
  console.log("Score ", playerScore, " - ", compScore);
  pScore.textContent = playerScore;
  cScore.textContent = compScore;
} // This function compares the player and computers score

function win(roundResult) {
  if (roundResult === "You Win!") {
    roundWinner.textContent = "You Scored!";
    scoreBox.style.borderColor = "#ffca3a";
  } else if (roundResult === "You Lose!") {
    roundWinner.textContent = "Computer Scored";
    scoreBox.style.borderColor = "#c14953";
  } else if (roundResult === "Tie!") {
    roundWinner.textContent = "Tie!";
    scoreBox.style.borderColor = "white";
  }
}

function letWinner() {
  if (compScore === 5) {
    modalBg.style.display = "flex";
    winner = "Computer Wins!";
    modalWinner.textContent = winner;
    modalScore.textContent = `${compScore} - ${playerScore}`;
    pScore.textContent = playerScore;
    cScore.textContent = compScore;
  } else if (playerScore === 5) {
    modalBg.style.display = "flex";
    winner = "You Won!";
    modalWinner.textContent = winner;
    modalScore.textContent = `${playerScore} - ${compScore}`;
    pScore.textContent = playerScore;
    cScore.textContent = compScore;
  }
  console.log(winner);
} // This function declares the winner

function playRound() {
  if (playerSelection === "rock" && computerSelection === "scissors")
    roundResult = "You Win!";
  else if (playerSelection === "rock" && computerSelection === "paper")
    roundResult = "You Lose!";
  else if (playerSelection === "rock" && computerSelection === "rock")
    roundResult = "Tie!";
  else if (playerSelection === "paper" && computerSelection === "paper")
    roundResult = "Tie!";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    roundResult = "You Lose!";
  else if (playerSelection === "paper" && computerSelection === "rock")
    roundResult = "You Win!";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    roundResult = "You Win!";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    roundResult = "You Lose!";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    roundResult = "Tie";
  else roundResult = "Check your spelling!";
  console.log(roundResult);
  console.log("computerSelection = ", computerSelection);
  if ((winner = "Computer takes Victory" || "You take Victory!")) {
    winner = "";
  }
  return roundResult;
} // This function plays the round and declares the winner

function playRock(playerScore, compScore) {
  playRound((playerSelection = "rock"), letComputerChoose());
  getScore();
  win(roundResult);
  letWinner();
}

function playPaper(playerScore, compScore) {
  playRound((playerSelection = "paper"), letComputerChoose());
  getScore();
  win(roundResult);
  letWinner();
}

function playScissors(playerScore, compScore) {
  playRound((playerSelection = "scissors"), letComputerChoose());
  getScore();
  win(roundResult);
  letWinner();
}

const rockBtn = document.querySelector(".rock");

rockBtn.addEventListener("click", (e) => {
  playRock(playerScore, compScore);
  showChoice(playerSelection, computerSelection);
});

const paperBtn = document.querySelector(".paper");

paperBtn.addEventListener("click", (e) => {
  playPaper(playerScore, compScore);
  showChoice(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector(".scissors");

scissorsBtn.addEventListener("click", (e) => {
  playScissors(playerScore, compScore);
  showChoice(playerSelection, computerSelection);
});

const pScore = document.querySelector(".p-score");
const cScore = document.querySelector(".c-score");
const roundWinner = document.querySelector(".scoring-player h2");
const scoreBox = document.querySelector(".scoring-player");
const playerChoice = document.querySelector(".player-choice");
const compChoice = document.querySelector(".comp-choice");

// Image Selectors for player/comp choice
const playerRockChoice = document.querySelector(".playerRockChoice");
const playerPaperChoice = document.querySelector(".playerPaperChoice");
const playerScissorsChoice = document.querySelector(".playerScissorsChoice");

const compRockChoice = document.querySelector(".compRockChoice");
const compPaperChoice = document.querySelector(".compPaperChoice");
const compScissorsChoice = document.querySelector(".compScissorsChoice");

// Modal Selectors
const modalBg = document.querySelector(".modal-bg");
const modalWinner = document.querySelector(".modal-winner");
const modalScore = document.querySelector(".modal-score");
const modalBtn = document.querySelector(".modal-btn");
const modalCloseBtn = document.querySelector(".modal-close");

// This lets the play again button work
modalBtn.addEventListener("click", (e) => {
  compScore = 0;
  playerScore = 0;
  pScore.textContent = playerScore;
  cScore.textContent = compScore;
  modalBg.style.display = "none";
  roundWinner.textContent = "";
  scoreBox.style.borderColor = "#2d2d2a";
});

modalCloseBtn.addEventListener("click", (e) => {
  modalBg.style.display = "none";
});

// This function shows the choices of the player and computer
function showChoice(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    playerRockChoice.classList.add("on");
  } else {
    playerRockChoice.classList.remove("on");
  }
  if (playerSelection === "paper") {
    playerPaperChoice.classList.add("on");
  } else {
    playerPaperChoice.classList.remove("on");
  }
  if (playerSelection === "scissors") {
    playerScissorsChoice.classList.add("on");
  } else {
    playerScissorsChoice.classList.remove("on");
  }
  if (computerSelection === "rock") {
    compRockChoice.classList.add("on");
  } else {
    compRockChoice.classList.remove("on");
  }
  if (computerSelection === "paper") {
    compPaperChoice.classList.add("on");
  } else compPaperChoice.classList.remove("on");
  if (computerSelection === "scissors") {
    compScissorsChoice.classList.add("on");
  } else compScissorsChoice.classList.remove("on");
}
