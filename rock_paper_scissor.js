let userScore = 0;
  let computerScore = 0;

function getComputerInput() {
  return Math.floor(Math.random() * 3);
}

function layout() {
  console.log(" ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯");
  console.log("| Your Turn | Computer | Your Score | Computer Score |");
  console.log(" ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯");
}

function print(userTurn, computerTurn) {
  console.log("|\t" + userTurn + "   | \t" + computerTurn + "\t|      " + userScore + "     |      " + computerScore + "        |");
  console.log(" ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯");
}

function getComputerScore() {
  return computerScore +1;
}

function getScore(userTurn, computerTurn) {
  if (userTurn === computerTurn) {
    console.log("Ohh! It's a tie!! Try again.");
  } else if ((userTurn === 0 && computerTurn === 2) ||
             (userTurn === 1 && computerTurn === 0) || 
             (userTurn === 2 && computerTurn === 1)) {
    userScore++;
    console.log("You win this round!");
  } else {
    computerScore++;
    console.log("Computer wins this round!");
  }
}

function getUserInput() {
  for(let i = 0; i < 3; i++) {
  console.log("\n0 --> ✊🏻 (rock) \n1 --> 📃 (paper) \n2 --> ✂️  (scissors)");

  //layout();
    const userTurn = prompt("It's your turn! what is your choice ? ")
  
    const computerTurn = getComputerInput();
    getScore(userTurn, computerTurn)
    //print(userTurn, computerTurn);
  }

}

function startGame() {
  const line = "\n---------------------------------------------------------\n";
  const welcomeMsg = "\n🔶🔶🔶🔶 Welcome to ROCK PAPER SCISSOR !!!! 🔶🔶🔶🔶\n"
  let contextMessage = "\n  RULES : \n🟠 Game is played in two players ";
  contextMessage += "\n🟠 The game will have 3 chance";

  console.log(line + welcomeMsg + contextMessage + line);
  prompt("Press 'Enter' to play!!!");
  getUserInput();
}

startGame();
