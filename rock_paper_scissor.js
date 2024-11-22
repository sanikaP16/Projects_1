let userScore = 0;
let computerScore = 0;

function getComputerInput() {
  return Math.floor(Math.random() * 3);
}

function printLine(length) {
  let line = "";
  
  for (let i = 0; i < length; i++) {
    line += "━";
  }

  return line;
}

function whoWins(userTurn, computerTurn) {
  const condition1 = userTurn === 0 && computerTurn === 2;
  const condition2 = userTurn === 1 && computerTurn === 0;
  const condition3 = userTurn === 2 && computerTurn === 1;

  return condition1 || condition2 || condition3;
}

function getScore(nameOfPlayer, userTurn, computerTurn) {
  if (userTurn === computerTurn) {
    return "Ohh! It's a tie!! Try again.";
  }

  if (whoWins(userTurn, computerTurn)) {
    return nameOfPlayer + " win!!!!";
  }

  return "Computer Wins!!!";
}

function discription() {
  let discriptionMsg = "Here you will play with a computer.";
  discriptionMsg += "\nYou can leave whenever you want ";
  discription += "Your Choices : "
  const signs = "\n0 --> ✊🏻 (rock) \n1 --> 📃 (paper) \n2 --> ✂️  (scissors)";

  return discriptionMsg + signs;
}

function getInput() {
  const userTurn = +prompt("\nIt's your turn! what is your choice ? ")

  if (userTurn < 0 || userTurn > 2) {
    console.log("\nInvalid Choice❗️ Please Enter a valid Choice!!")
    return getInput();
  }

  return userTurn;
}

function getUserInput(nameOfPlayer) {
  console.log(discription());

  const userTurn = getInput();
  const computerTurn = getComputerInput();

  console.log("\n" + nameOfPlayer + "'s Choice : ", userTurn);
  console.log("Computer's Choice : ", computerTurn);

  console.log(getScore(nameOfPlayer, userTurn, computerTurn));
}

function getName() {
  const nameOfPlayer = prompt("Enter your name :");
  return nameOfPlayer;
}

function startGame() {
  const welcomeMsg = "\n🔶🔶🔶🔶 Welcome to ROCK PAPER SCISSOR !!!! 🔶🔶🔶🔶\n";
  console.log(printLine(60) + welcomeMsg + printLine(60));
  const nameOfPlayer = getName();

  prompt(nameOfPlayer + " press 'Enter' to play!!!");
  console.clear();
  return getUserInput(nameOfPlayer);

}

startGame();
