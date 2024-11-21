function getSecretNumber(rangeStart, rangeEnd) {
  let secretNumber = Math.floor(Math.random() * rangeEnd);

  if (secretNumber < rangeStart) {
    secretNumber += rangeStart
  }

  return secretNumber;
}

function userFailed() {
  console.log("\n\n 🔸🔸🔸👍🏻Better luck next time!!👍🏻🔸🔸🔸\n\n ");

  if (confirm("\n Do you want to play agian ?")) {
    console.clear();

    startGame(300, 400, 5);
  } else {
    console.log("\n\t\tGoodBye!!!!\n\n");
  }
}

function userNailedIt(secretNumber) {
  console.log(
    " 🥳🎉Bravo!! You've nailed it. The number was " + secretNumber + "!");

  if (confirm(" ✳️  Do you want to play agian ?")) {
    console.clear();

    startGame(300, 400, 5);
  } else {
    console.log("\n\t\tGoodBye!!!!");
  }
}


function doesUserFoundIt(maxAttempts, secretNumber, rangeStart, rangeEnd) {
  const userGuess =
    +(prompt("\n Take a guess ! (Remaining attempts : " + maxAttempts + ") "));

  if (maxAttempts <= 1) {
    return userFailed();
  }

  const isInputValid = (userGuess < rangeStart) || (userGuess > rangeEnd);

  if ("" + userGuess === 'NaN' || isInputValid) {
    console.log(" ‼️ Invalid Input!! Please enter a valid number.");
    doesUserFoundIt(maxAttempts, secretNumber, rangeStart, rangeEnd);
  }

  if (userGuess === secretNumber) {
    return userNailedIt(secretNumber);
  }

  if (userGuess < secretNumber) {
    console.log("\n " + userGuess + " Too low!⬇️ .... Try a higher number!!");
  }

  if (userGuess > secretNumber) {
    console.log("\n " + userGuess + " Too high!⬆️ .... Try a smaller number!!");
  }

  return doesUserFoundIt(maxAttempts - 1, secretNumber, rangeStart, rangeEnd);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  const secretNumber = getSecretNumber(rangeStart, rangeEnd);

  const line = "\t-----------------------------------------------------------";
  const welcomeMsg = "\n\t\t!!Welcome to Guess the Number!!\n";
  let contextMsg = "\nThe secret number is between " + rangeStart;
  contextMsg += " and " + rangeEnd + " You have " + maxAttempts;
  contextMsg += " attempts to find it."

  console.log(line + welcomeMsg + contextMsg);

  prompt("\n\t🎉--------------------- Let's Go!!! ------------------------🎉");

  // console.log("\tThe secret number is : ", secretNumber); // remove this!!

  return doesUserFoundIt(maxAttempts, secretNumber, rangeStart, rangeEnd);
}

startGame(100, 200, 6);
