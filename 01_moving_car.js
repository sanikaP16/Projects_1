function repeat(repeatString, times) {
  let string = "";
  
  for (let i = 0; i <= times; i++) {
    string += repeatString;
  }

  return string;
}

let car1 = "  ______" + repeat(" ", 85);
let car2 = " /|_||_\\`.__" + repeat(" ", 81);
let car3 = "(   _    _ _\\" + repeat(" ", 80);
let car4 = "=`-(_)--(_)-'" + repeat("_", 80);
function delay(time) {
  for (let i = 0; i < time * 10000000; i++) { }
}

function getNewframe(string) {
  let newFrame = "";

  for (let index = 0; index < string.length - 1; index++) {
    newFrame += string[index];
  }

  return string[string.length - 1] + newFrame;
}

function drawMountain() {
  const back1 = [
    "                                                 *******",
    "                                 ~             *---*******",
    "                                ~             *-----*******",
    "                         ~                   *-------*******",
    "                          __      _   _!__   ***-------******",
    "                     _   /  \\_  _/ \\  |::| ___**-----********   ~",
    "                    _/ \\_/^   \\/   ^\\/|::|\\|:|  **---*****/^\\_",
    "                /\\/  ^ /  ^    / ^ ___|::|_|:|_/\\_******/  ^  \\",
    "               /  \\  _/ ^ ^   /    |::|--|:|---|  \\__/  ^     ^\\___",
    "              _/_^  \/  ^    _/ ^   |::|::|:|-::| ^ /_  ^    ^  ^   \\_",
    "            /   \\^ /    /\\ /       |::|--|:|:--|  /  \\        ^      \\",
    "           /     \\/    /  /        |::|::|:|:-:| / ^  \\  ^      ^     \\",
    "          / _Q  _Q_Q  / _Q    _Q   |::|::|:|:::|/    ^ \\   _Q      ^",
    "         /_\\)   /_\\)/_/\\)  /_\\)  /_\\)  |::|::|:|:::|          /_\\)",
    "         _O|/O___O|/O_OO|/O__O|/O__O|/O__________________________O|/O__________",
    "//////////////////////////////////////////////////////////////////////////////////////////////"];

  for (let i = 0; i < back1.length; i++) {
    console.log(back1[i]);
  }
}

function moveCar() {
  for (let i = 0; i < 200; i++) {
    const road = repeat("▂", 93);
    const line = repeat("\n", 2);
    car1 = getNewframe(car1);
    car2 = getNewframe(car2);
    car3 = getNewframe(car3);
    car4 = getNewframe(car4);

    console.clear();
    drawMountain();

    console.log(car1 + "\n" + car2 + "\n" + car3 + "\n" + car4);
    console.log(line + road + line);
    
    delay(10);
  }
}

moveCar();
