function sin(x, aplitude, frequency, phase) {
  return Math.round(aplitude * Math.sin(x / frequency) + phase);
}

function delay(time) {
  for (let i = 0; i < time * 10000000; i++) { }
}

function repeat(value, times) {
  let string = "";
  for (let i = 0; i < times; i++) {
    string += value;
  }

  return string;
}

function drawDna(x, y) {
  let symbol1 = "🟠";
  let symbol2 = "🔴";

  if (y < x) {
    let temp = symbol1
    symbol1 = symbol2;
    symbol2 = temp;
  }

  console.log(repeat(" ", Math.min(x, y)) + symbol1 +
    repeat("-", Math.abs(x - y)) + symbol2);

  delay(7);
}

function getCordinates() {
  for (let i = 0; i < 500; i += 1.3) {
    const x = sin(i, 12, 6, 20);
    const y = sin(-(i), 12, 6, 20);
    drawDna(x, y);
  }
}
getCordinates();
