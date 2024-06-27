let joined = false;

let colour = randomColour();
  document.getElementById("text").style.textShadow = `0 0 45px ${colour}, 0 0 60px ${colour}, 0 0 75px ${colour}, 0 0 90px ${colour}, 0 0 105px ${colour}`;

setInterval(() => {
  colour = randomColour();
  document.getElementById("text").style.textShadow = `0 0 45px ${colour}, 0 0 60px ${colour}, 0 0 75px ${colour}, 0 0 90px ${colour}, 0 0 105px ${colour}`;
}, 1000);

if (!joined) {
  for (let index = 1; index <= 22; index++) {
    document.getElementById(index).style.transform = `translate(${randomPosition("x")}px, ${randomPosition("y")}px)`;
  }
}

else {
  for (let index = 1; index <= 22; index++) {
    document.getElementById(index).style.transform = `translate(0px, 0px)`;
  }
}

setInterval(() => {
  if (!joined) {
    for (let index = 1; index <= 22; index++) {
      document.getElementById(index).style.transform = `translate(${randomPosition("x")}px, ${randomPosition("y")}px)`;
    }
  }

  else {
    for (let index = 1; index <= 22; index++) {
      document.getElementById(index).style.transform = `translate(0px, 0px)`;
    }
  }
}, 1000);

setTimeout(() => {
  joined = true;

  setTimeout(() => {
    joined = false;
  }, 4000);
}, 10000);

setInterval(() => {
  setTimeout(() => {
    joined = true;

    setTimeout(() => {
      joined = false;
    }, 4000);
  }, 10000);
}, 13000);

function randomColour() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function randomPosition(axe) {
  var screenWidth = screen.width;
  var screenHeight = screen.height;

  var maximumX = screenWidth / 5;
  var maximumY = screenHeight / 5;

  if (axe == "x") {
    return Math.random() * (maximumX - -maximumX + 1) + -maximumX;
  }

  else if (axe == "y") {
    return Math.random() * (maximumY - -maximumY + 1) + -maximumY;
  }
}