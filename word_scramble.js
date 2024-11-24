function getNumber() {
  return Math.floor(Math.random() * 10);
}

function getEasyWord() {
  switch (getNumber()) {
    case 0:
      return 'piano';
    case 1:
      return 'journey';
    case 2:
      return 'scramble';
    case 3:
      return 'attractive';
    case 4:
      return 'evident';
    case 5:
      return 'history';
    case 6:
      return 'entertain';
    case 7:
      return 'awesome';
    case 8:
      return 'accomplish';
    case 9:
      return 'peculiar';
    default:
      console.log('something went wrong!!');
  }
}

function getMediumWord() {
  switch (getNumber()) {
    case 0:
      return 'thunder';
    case 1:
      return 'difference';
    case 2:
      return 'historical';
    case 3:
      return 'motivation';
    case 4:
      return 'acceptance';
    case 5:
      return 'permission';
    case 6:
      return 'suggestion';
    case 7:
      return 'alteration';
    case 8:
      return 'accomplish';
    case 9:
      return 'information';
    default:
      console.log('something went wrong!!');
  }
}

function getHardWord() {
  switch (getNumber()) {
    case 0:
      return 'consistency';
    case 1:
      return 'observation';
    case 2:
      return 'anniversary';
    case 3:
      return 'recognition';
    case 4:
      return 'revolution';
    case 5:
      return 'consequence';
    case 6:
      return 'appreciation';
    case 7:
      return 'perception';
    case 8:
      return 'investment';
    case 9:
      return 'culmination';
    default:
      console.log('something went wrong!!');
  }
}

function getRandomIndex(string) {
  let randomIndexes = '';

  while (randomIndexes.length < string.length) {
    let flag = true;
    const number = Math.floor(Math.random() * string.length);

    for (let index = 0; index < randomIndexes.length; index++) {
      if (number === +randomIndexes[index]) {
        flag = false;
      }
    }

    if (flag) {
      randomIndexes += number;
    }
  }

  return randomIndexes;
}

function getDificulty() {
  console.log("\n1. Easy \n2. Medium \n3. Hard");

  const dificulty = +prompt("\tChoose your dificulty level : ");

  switch (dificulty) {
    case 1:
      return getEasyWord();

    case 2:
      return getMediumWord();

    case 3:
      return getHardWord();

    default:
      console.log("\nPlease enter a valid choice!!");
      return getDificulty();
  }
}

function getRandomWord() {
  let string = getDificulty();
  let randomNumbers = getRandomIndex(string);
  let stringtoPrint = '';

  for (let index = 0; index < randomNumbers.length; index++) {
    stringtoPrint += string[randomNumbers[index]];
  }
  console.log("\nYour Word is : " + stringtoPrint);

  doesUserFoundIt(5, string, stringtoPrint);
}

function askPlayAgain() {
  if (confirm("\n ✳️  Do you want to play agian ?")) {
    console.clear();

    return startGame();
  }
  console.log("\n\t🤝Thank you!! Good Byee!!!✌🏻✌🏻\n");
}

function doesUserFoundIt(maxAttempts, originalString, randomString) {
  const userInput = prompt(
    "\nTake a guess!! you have " + maxAttempts + " remaining attempts!! ");

  if (originalString === userInput) {
    console.log(
      "\n🥳🎉Bravo!! You've nailed it. The word was " + originalString + "!");

    return askPlayAgain();
  }

  if (maxAttempts <= 1) {
    console.log("\n❗️Ohh sad!!☹️ You loose!!! Play again!🔂");

    return askPlayAgain();
  }

  console.log("\nUmm...☹️ wrong guess!! Try again!");
  doesUserFoundIt(maxAttempts - 1, originalString, randomString);
}

function description() {
  let messsage = "🔸🔸🔸🔸🔸WElCOME to WORD SCRAMBLE🔸🔸🔸🔸";
  messsage += "\n\nRules : \n  You'll have 5 chance to guess the word!";
  messsage += "\n  It has 3 dificulty levels";

  return messsage;
}

function startGame() {
  console.log(description());
  prompt("\n▶️ Press Enter to start!!");

  getRandomWord();
}

startGame();
