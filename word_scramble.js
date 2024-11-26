function getNumber() {
  return Math.floor(Math.random() * 10);
}

function getEasyWord() {
  const arrayOfEasyWords = ['Piano', 'Journey', 'Scramble', 'Attractive',
    'Evident', 'History', 'Entertain', 'Awesome', 'Accomplish', 'Peculiar'
  ];

  return arrayOfEasyWords[getNumber()];
}

function getMediumWord() {
  const arrayOfMediumWord = ['Thunder', 'Difference', 'Historical',
    'Motivation', 'Acceptance', 'Permission', 'Suggestion', 'Alteration',
    'Accomplish', 'Information'
  ];

  return arrayOfMediumWord[getNumber()];
}

function getHardWord() {
  const arrayOfHardWord = ['consistency', 'obervation', 'anniversary',
    'recognition', 'consequence', 'perception', 'investment', 'culmination'
  ];

  return arrayOfHardWord[getNumber()];
}

function isNumberUnique(number, randomIndexes) {
  for (let index = 0; index < randomIndexes.length; index++) {
    if (number === +randomIndexes[index]) {
      return false;
    }
  }

  return true;
}

function getRandomIndex(string) {
  let randomIndexes = '';
  while (randomIndexes.length < string.length) {
    const number = Math.floor(Math.random() * string.length);

    if (isNumberUnique(number, randomIndexes)) {
      randomIndexes += number;
    }
  }

  return randomIndexes;
}


function getDificulty() {
  console.log("\n1. Easy \n2. Medium \n3. Hard");

  switch (+prompt("\tChoose your dificulty level : ")) {
    case 1:
      console.clear();
      console.log("\n\t------- Easy Level --------\n");
      return getEasyWord();

    case 2:
      console.clear();
      console.log("\n\t------- Medium Level --------\n");
      return getMediumWord();

    case 3:
      console.clear();
      console.log("\n\t------- Hard Level --------\n");
      return getHardWord();

    default:
      console.log("\nPlease enter a valid choice!!");
      return getDificulty();
  }
}

function askPlayAgain() {
  if (confirm("\n\n ✳️  Do you want to play agian ?")) {
    console.clear();

    return startGame();
  }

  console.log("\n\t🤝Thank you!! Good Byee!!!✌🏻✌🏻\n");
  return;
}

function quotes(contentToQuote) {
  return '"' + contentToQuote + '"';
}

function getHint(originalString) {
  console.log("\n\tUmm...☹️ wrong guess!! Try again!");
  console.log("\tHINT : The word starts form : " + originalString[0]);
}

function checkGuess(maxAttempts, originalString, userInput) {
  if (originalString === userInput) {
    const winMessage1 = "\n\t🥳🎉Bravo!! You've nailed it. The word was ";
    const winMessage2 = quotes(originalString) + "!";

    console.log(winMessage1 + winMessage2);

    askPlayAgain();
    return true;
  }

  if (maxAttempts > 0) {
    getHint(originalString);
  }

  return false;
}

function isGuessCorrect(maxAttempts, originalString) {
  const userInput = prompt(
    "\nTake a guess!! you have " + maxAttempts + " remaining attempts!! ");

  if (checkGuess(maxAttempts, originalString, userInput)) {
    return;
  }

  if (maxAttempts === 1) {
    const loseMessage1 = '\n\t❗️Ohh sad!!☹️ You loose!!! The word was ';
    const loseMessage2 = quotes(originalString) + 'Play again!🔂';

    console.log(loseMessage1 + loseMessage2);

    return askPlayAgain();
  }

  return isGuessCorrect(maxAttempts - 1, originalString);
}

function getRandomWord() {
  const string = getDificulty();
  let randomNumbers = getRandomIndex(string);
  let stringtoPrint = '';

  for (let index = 0; index < randomNumbers.length; index++) {
    stringtoPrint += string[randomNumbers[index]];
  }

  console.log("\n\tYour Word is : " + quotes(stringtoPrint));

  isGuessCorrect(3, string, stringtoPrint);
}

function description() {
  let messsage = "🔸🔸🔸🔸🔸WElCOME to WORD SCRAMBLE🔸🔸🔸🔸";
  messsage += "\n\nRules : \n  You'll have 3 chance to guess the word!";
  messsage += "\n  It has 3 dificulty levels";

  return messsage;
}

function startGame() {
  console.log(description());
  prompt("\n▶️ Press Enter to start!!");

  getRandomWord();
}

startGame();
