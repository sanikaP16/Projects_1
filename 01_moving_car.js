function repeat(repeatString, times) {
  let string = "";
  for (let i = 0; i <= times; i++) {
    string += repeatString;
  }

  return string;
}


let car1 = "  ______" + repeat(" ", 55);
let car2 = " /|_||_\\`.__" + repeat(" ", 51);
let car3 = "(   _    _ _\\" + repeat(" ", 50);
let car4 = "=`-(_)--(_)-'" + repeat("_", 50);
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

function moveCar() {
  for (let i = 0; i < 200; i++) {
    car1 = getNewframe(car1);
    car2 = getNewframe(car2);
    car3 = getNewframe(car3);
    car4 = getNewframe(car4);

    console.clear();
    console.log(car1 + "\n" + car2 + "\n" + car3 + "\n" + car4);
    delay(10);
  }
}

moveCar();
