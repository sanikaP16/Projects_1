let singleDigitNumber = "";
let totalScore = 0;

function generateNumber() {
  return Math.floor(Math.random() * 10);
}

function getUniqueNumber() {
  let number = generateNumber();
  if (singleDigitNumber === "") {
    singleDigitNumber += number;

    return number;
  }

  let i = 0;

  while (i < singleDigitNumber.length) {
    const num = +singleDigitNumber[i];
    if (num === number) {
      number = generateNumber();
      i = -1;
    }
    i++;
  }

  singleDigitNumber += number;
  return number;
}

function arrow() {
  return "\n\t\t--->";
}

function printLine(length) {
  let line = "";
  for (let i = 0; i < length; i++) {
    line += "━";
  }

  return line;
}

function scienceQuestions() {
  let que = "";
  let answer;
  let sciScore = 0;

  for (let i = 0; i < 6; i++) {
    switch (getUniqueNumber()) {
      case 0:
        que = "\n\n\t⚪️. Which planet is known as the 'Red Planet'?\n\t1️⃣ Jupiter  2️⃣ Venus  3️⃣ Mars 4️⃣ Saturn" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          sciScore++;
        }
        break;

      case 1:
        que = "\n\t⚪️. Which of the following is a non metal that remains liquid at room temperature?\n\t1️⃣ Phosphorus  2️⃣ Bromine  3️⃣ Chorine 4️⃣ Helium" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          sciScore++;
        }
        break;

      case 2:
        que = "\n\t⚪️. Which of the following is used in pencils?\n\t1️⃣ Graphite  2️⃣ Silicon  3️⃣ Charcol 4️⃣ Helium" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          sciScore++;
        }
        break;

      case 3:
        que =
          "\n\t⚪️. Chemical formula for water?\n\t1️⃣ NaAlO2  2️⃣ H2O  3️⃣ Al2O3 4️⃣ CaSiO3" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          sciScore++;
        }
        break;

      case 4:
        que =
          "\n\t⚪️. The gas usually filled in the electric bulb is\n\t1️⃣ Nitrogen  2️⃣ Hydrogen  3️⃣ Carbon dioxide 4️⃣ oxygen" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          sciScore++;
        }
        break;

      case 5:
        que =
          "\n\t⚪️. Washing soda is the common name for?\n\t1️⃣ Sodium carbonate  2️⃣ Calcium bicarbonate  3️⃣ Sodium bicarbonate 4️⃣ Calcium carbonate" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          sciScore++;
        }
        break;

      case 6:
        que =
          "\n\t⚪️. Which of the gas is not known as green house gas?\n\t1️⃣ Methane  2️⃣ Nitrous oxide  3️⃣ Carbon dioxide 4️⃣ Hydrogen" + arrow();
        answer = prompt(que);

        if (+answer === 4) {
          sciScore++;
        }
        break;

      case 7:
        que =
          "\n\t⚪️. The hardest substance available on earth is?\n\t1️⃣ Gold  2️⃣ Iron  3️⃣ Diamond 4️⃣ Platinum" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          sciScore++;
        }
        break;

      case 8:
        que =
          "\n\t⚪️. Which of the following is used as a lubricant?\n\t1️⃣ Graphite  2️⃣ Silica  3️⃣ Iron oxide 4️⃣ Diamond" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          sciScore++;
        }
        break;

      case 9:
        que =
          "\n\t⚪️. The average salinity of sea water is?\n\t1️⃣ 3%  2️⃣ 3.5%  3️⃣ 2.5% 4️⃣ 2%" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          sciScore++;
        }
        break;

      default:
        console.log("Something Went Wrong");
    }

  }
  return sciScore;
}

function scienceTest() {
  console.clear();

  console.log("\n\t\t" + printLine(20) + " SCIENCE TEST BEGINS " + printLine(20));
  console.log("\n\t" + printLine(30) + " ALL THE BEST " + printLine(30));

  return scienceQuestions();
}


function mathsQuestions() {
  let que = "";
  let answer;
  let mathsScore = 0;

  for (let i = 0; i < 8; i++) {
    switch (getUniqueNumber()) {
      case 0:
        que =
          "\n\t⚪️. What is the sum of 130+125+191?\n\t1️⃣ 335  2️⃣ 456  3️⃣ 446 4️⃣ 426" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          mathsScore++;
        }
        break;

      case 1:
        que =
          "\n\t⚪️. If we minus 712 from 1500, how much do we get?\n\t1️⃣ 788  2️⃣ 778  3️⃣ 768 4️⃣ 758" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          mathsScore++;
        }
        break;

      case 2:
        que =
          "\n\t⚪️. 50 times of 8 is equal to:\n\t1️⃣ 80  2️⃣ 400  3️⃣ 800 4️⃣ 4000" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          mathsScore++;
        }
        break;

      case 3:
        que =
          "\n\t⚪️. Find the missing terms in multiple of 3: 3, 6, 9, __, 15:\n\t1️⃣ 10  2️⃣ 11  3️⃣ 12 4️⃣ 13" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          mathsScore++;
        }
        break;

      case 4:
        que =
          "\n\t⚪️. Solve 24÷8+2.\n\t1️⃣ 5  2️⃣ 6  3️⃣ 8 4️⃣ 12" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          mathsScore++;
        }
        break;

      case 5:
        que =
          "\n\t⚪️. What is the next prime number after 55?\n\t1️⃣ 77  2️⃣ 61  3️⃣ 59 4️⃣ 57 " + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          mathsScore++;
        }
        break;

      case 6:
        que =
          "\n\t⚪️. What is the next number in the sequence: 2, 4, 6, 8, ...?\n\t1️⃣ 9  2️⃣ 10  3️⃣ 12 4️⃣ 11" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          mathsScore++;
        }
        break;

      case 7:
        que =
          "\n\t⚪️. What is the square root of 81?\n\t1️⃣ 8  2️⃣ 7  3️⃣ 10 4️⃣ 9" + arrow();
        answer = prompt(que);

        if (+answer === 4) {
          mathsScore++;
        }
        break;

      case 8:
        que =
          "\n\t⚪️. In between any two numbers, there are:\n\t1️⃣ Only one rational number  2️⃣ Two rational numbers  3️⃣ Infinite rational numbers 4️⃣ no rational number" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          mathsScore++;
        }
        break;

      case 9:
        que =
          "\n\t⚪️. 3√6 + 4√6 is equal to:?\n\t1️⃣ 6√6  2️⃣ 7√6  3️⃣ 4√12 4️⃣ 7√12" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          mathsScore++;
        }
        break;

      default:
        console.log("Something Went Wrong");
    }
  }

  return mathsScore;
}


function gkQuestions() {
  let que = "";
  let answer;
  let gkScore = 0;

  for (let i = 0; i < 6; i++) {
    switch (getUniqueNumber()) {
      case 0: que = "\n\n\t⚪️. Who captained India to its first-ever Cricket World Cup victory in 1983?\n\t\t1️⃣ Kapil Dev  2️⃣ Sunil Gavaskar  3️⃣ Sachin Tendulkar 4️⃣ Sourav Ganguly" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          gkScore++;
        }

        break;

      case 1: que = "\n\t⚪️. Which Indian badminton player became the first Indian to win an Olympic medal in the sport?\n\t\t1️⃣ Kidambi Srikanth  2️⃣ PV Sindhu  3️⃣ Sania Nehwal 4️⃣ Prakash Padukone" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          gkScore++;
        }

        break;

      case 2: que = "\n\t⚪️. Which city hosted the iconic 2011 Cricket World Cup final between India and Sri Lanka?\n\t\t1️⃣ Mumbai  2️⃣ Kolkata  3️⃣ Chennai 4️⃣ Delhi" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          gkScore++;
        }

        break;
      case 3:
        que = "\n\t⚪️. Who was the first Indian cricketer to score a double century in ODI?\n\t\t1️⃣ Sunil Gavaskar  2️⃣ Sachin Tendulkar  3️⃣ Virender Sehwag 4️⃣ Kapil Dev" + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          gkScore++;
        }

        break;

      case 4:
        que = "\n\t⚪️. Who is the youngest Indian woman to climb Mount Everest?\n\t\t1️⃣ Arunima Sinha  2️⃣ Kaamya Karthikeyan  3️⃣ Santosh Yadav 4️⃣ Bachendri Pal " + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          gkScore++;
        }

        break;

      case 5:
        que = "\n\t⚪️. Who is the current president of the Board of Control for Cricket in India (BCCI)??\n\t\t1️⃣ Sourav Ganguly  2️⃣ Roger Binny  3️⃣ Rahul Dravid 4️⃣ Jay Shah " + arrow();
        answer = prompt(que);

        if (+answer === 2) {
          gkScore++;
        }

        break;

      case 6:
        que = "\n\t⚪️. Who is the only Indian male boxer to win a medal at the Olympics?\n\t\t1️⃣ Manoj Kumar  2️⃣ Mary Kom  3️⃣ Vikas Krishan Yadav 4️⃣ Vijender Singh " + arrow();
        answer = prompt(que);

        if (+answer === 4) {
          gkScore++;
        }

        break;

      case 7:
        que = "\n\t⚪️. What is the capital of Australia?\n\t\t1️⃣ Sydney  2️⃣ Melbourne  3️⃣ Canberra 4️⃣ Perth" + arrow();
        answer = prompt(que);

        if (+answer === 3) {
          gkScore++;
        }

        break;

      case 8:
        que = "\n\t⚪️. Who wrote the play 'Romeo and Juliet'?\n\t\t1️⃣ William Shakespeare  2️⃣ Jane Austen  3️⃣ Charles Dickens 4️⃣ F. Scott Fitzgerald" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          gkScore++;
        }

        break;

      case 9:
        que = "\n\t⚪️. What is the currency of Japan?\n\t\t1️⃣ Yen  2️⃣ Euro  3️⃣ Dollar 4️⃣ Rupee" + arrow();
        answer = prompt(que);

        if (+answer === 1) {
          gkScore++;
        }

        break;

      default:
        console.log("Something Went Wrong");
    }
  }

  return gkScore;
}

function mathsTest() {
  console.clear();

  console.log("\n\t\t" + printLine(20) + " MATHS TEST BEGINS " + printLine(20));
  console.log("\n\t" + printLine(30) + " ALL THE BEST " + printLine(30));

  return mathsQuestions();
}

function gkTest() {
  console.clear();

  console.log(
    "\n\t\t" + printLine(20) + " GENERAL KNOWLEDGE TEST BEGINS " + printLine(20));
  console.log("\n\t" + printLine(30) + " ALL THE BEST " + printLine(30));

  return gkQuestions();
}

function getSubjectOfQuiz(subjectCode, nameOfCandidate) {
  switch (subjectCode) {
    case 1:
      const sciScore = scienceTest();
      totalScore += sciScore;

      console.log("\n\n\t" + printLine(60));
      const viewScienceScore = confirm("\n\tDo you want to see Result ? ");

      if (viewScienceScore) {
        console.clear();

        console.log("\n\n\t" + printLine(60));
        console.log("\n\n\t❕Your Science Score is : " + sciScore);
      }

      return testChoice(nameOfCandidate);

    case 2:
      const mScore = mathsTest();
      totalScore += mScore;

      console.log("\n\n\t" + printLine(60));
      const viewMathsScore = confirm("\n\tDo you want to see Result ? ");

      if (viewMathsScore) {
        console.clear();

        console.log("\n\n\t" + printLine(60));
        console.log("\n\n\t❕Your Mathematics Score is : " + mScore);
      }

      return testChoice(nameOfCandidate);

    case 3:
      const gScore = gkTest();
      totalScore += gScore;
      console.log("\n\n\t" + printLine(60));
      const viewGkScore = confirm("\n\tDo you want to see Result ? ");

      if (viewGkScore) {
        console.clear();

        console.log("\n\n\t" + printLine(60));
        console.log("\n\n\t❕Your General Knowledge Score is : " + gScore);
      }

      return testChoice(nameOfCandidate);

    case 4:
      return terminateTest(nameOfCandidate, totalScore);

    default:
      console.log("!!!!! You entered wrong subject! Select code wisely!");
      return testChoice(nameOfCandidate);
  }
}

function terminateTest(nameOfCandidate, totalScore) {
  const thankUMessage = "Thank you " + nameOfCandidate + "!!! ";
  const scoreMessage = "\n\t\tYour Total Score is " + totalScore;
  console.log("\n\t" + printStars(42));
  console.log("\n\t\t  " + thankUMessage + scoreMessage);
  console.log("\t" + printStars(42));
  return;
}

function testChoice(nameOfCandidate) {
  console.log("\n\n\t" + printLine(60));
  console.log("\n\n\t\t1. Science ");
  console.log("\t\t2. Mathematics");
  console.log("\t\t3. General Knowledge");
  console.log("\t\t4. Exit\n\n");

  const subjectCode = prompt("\t\tEnter subject code (1, 2, 3) : ");
  singleDigitNumber = "";

  if (subjectCode === "4") {
    return terminateTest(nameOfCandidate, totalScore);
  }

  return getSubjectOfQuiz(+subjectCode, nameOfCandidate);
}

function printStars(length) {
  let starLine = "";
  for (let i = 0; i < length; i++) {
    starLine += "*";
  }
  return starLine;
}

function getInformation() {
  console.clear();

  console.log(
    "\n\t🙏🏻📝" + printStars(17) + " WELCOME TO QUIZ " + printStars(17) + "📝🙏🏻");
  const nameOfCandidate = prompt("\n\t\tEnter your name :");
  const rollNumber = prompt("\n\t\tEnter RollNumber :");
  console.log("\n\t" + printLine(60));
  const confirmTest = confirm("\n\n\t\tDo you want to attempt the test? ");
  console.log("\n\t" + printLine(60));

  confirmTest
    ? testChoice(nameOfCandidate)
    : terminateTest(nameOfCandidate, totalScore);
}

getInformation();
