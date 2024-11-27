const center = 50;

function delay(time) {
  for (let i = 0; i < time * 10000000; i++) { }
}

function drawRainbow(radiusSquare, line) {
  if (radiusSquare <= 2025 && radiusSquare >= 1025) {
    line += "🟣";
  } else if (radiusSquare >= 650 && radiusSquare <= 1025) {
    line += "🔵";
  } else if (radiusSquare >= 400 && radiusSquare <= 650) {
    line += "🟠";
  } else if (radiusSquare >= 200 && radiusSquare <= 400) {
    line += "🟢";
  } else if (radiusSquare >= 80 && radiusSquare <= 200) {
    line += "🟡";
  } else if (radiusSquare >= 0 && radiusSquare <= 80) {
    line += "🔴";
  } else {
    line += "  ";
  }

  return line;
}

function drawCircle() {
  console.clear();
  for (let xCoordinate = 0; xCoordinate < 50; xCoordinate += 1) {
    let line = "";

    for (let yCoordinate = 0; yCoordinate < 100; yCoordinate++) {
      const radiusSquare =
        ((xCoordinate - center) ** 2) + ((yCoordinate - center) ** 2);

      line = drawRainbow(radiusSquare, line);
    }

    delay(5);
    console.log(line);
  }
}

drawCircle();
