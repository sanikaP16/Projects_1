// formula for circle 
// radius * radius = (x - center)^2 + (y - center)^2
const center = 50;

function delay(time) {
  for (let i = 0; i < time * 10000000; i++) { }
}

function drawCircle() {
  console.clear();
  for (let xCoordinate = 0; xCoordinate < 100; xCoordinate += 1) {
    let line = "";

    for (let yCoordinate = 0; yCoordinate < 100; yCoordinate++) {
      const radiusSquare =
        ((xCoordinate - center) ** 2) + ((yCoordinate - center) ** 2);

      line += radiusSquare < 2025 ? "⚪️" : "  ";
    }

    delay(30);
    console.log(line);
  }
}

drawCircle();
