let joined = false;
if (!localStorage.getItem("animation")) {
  localStorage.setItem("animation", "random");
}

colour();

setInterval(() => {
  colour();
}, 1000);

setInterval(() => {
  if (localStorage.getItem("animation") == "random") {
    random();
  }

  else if (localStorage.getItem("animation") == "snake") {
    snake();
  }
}, 1000);

function colour() {
  let colour = randomColour();
  document.getElementById("text").style.textShadow = `0 0 45px ${colour}, 0 0 60px ${colour}, 0 0 75px ${colour}, 0 0 90px ${colour}, 0 0 105px ${colour}`;
  
  document.getElementById("settings").style.boxShadow = `0 0 45px ${colour}, 0 0 60px ${colour}, 0 0 75px ${colour}, 0 0 90px ${colour}, 0 0 105px ${colour}`;
  document.getElementById("settings").style.backgroundColor = colour;
  
  document.getElementById("random").style.backgroundColor = colour;
  document.getElementById("snake").style.backgroundColor = colour;
  document.getElementById("close").style.backgroundColor = colour;
}

function random() {
  if (!joined) {
    for (let index = 1; index <= 22; index++) {
      document.getElementById(index).style.transform = `translate(${randomPosition("x")}px, ${randomPosition("y")}px)`;
      document.getElementById(index).style.animation = "";
    }
  }
  
  else {
    for (let index = 1; index <= 22; index++) {
      document.getElementById(index).style.transform = `translate(0px, 0px)`;
      document.getElementById(index).style.animation = "";
    }
  }  
}

function snake() {
  for (let index = 1; index <= 22; index++) {
    document.getElementById(index).style.transform = `translate(0px, 0px)`;
    document.getElementById(index).style.animation = `1.5s snake infinite ease backwards`;
    document.getElementById(index).style.animationDelay = `${index / 3.14}s`;
  }
}

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

function openSettings() {
  document.getElementById("main").style.transition = "1s ease";
  document.getElementById("main").style.filter = "blur(75px)";

  document.getElementById("settings-panel").style.transition = "1s ease";
  document.getElementById("settings-panel").style.opacity = "1";
  document.getElementById("settings-panel").style.filter = "blur(0px)";
}

function closeSettings() {
  document.getElementById("main").style.transition = "1s ease";
  document.getElementById("main").style.filter = "blur(0px)";

  document.getElementById("settings-panel").style.transition = "1s ease";
  document.getElementById("settings-panel").style.opacity = "0";
  document.getElementById("settings-panel").style.filter = "blur(75px)";
}

function setAnimation(animation) {
  document.getElementById("random").style.transition = "none";
  document.getElementById("snake").style.transition = "none";

  if (animation == "random") {
    document.getElementById("random").className = "material-symbols-rounded";
    document.getElementById("random").innerText = "check";
  
    document.getElementById("snake").className = "";
    document.getElementById("snake").innerText = "Snake";
  }
  
  else if (animation == "snake") {
    document.getElementById("snake").className = "material-symbols-rounded";
    document.getElementById("snake").innerText = "check";
  
    document.getElementById("random").className = "";
    document.getElementById("random").innerText = "Random Motion";
  }

  document.getElementById("random").style.transition = "none";
  document.getElementById("snake").style.transition = "none";

  localStorage.setItem("animation", animation);

  document.getElementById("main").style.transition = "0.5s ease";
  document.getElementById("main").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("main").style.transition = "1s ease";
    document.getElementById("main").style.opacity = "1";
  }, 1000);
}

if (localStorage.getItem("animation") == "random") {
  document.getElementById("random").className = "material-symbols-rounded";
  document.getElementById("random").innerText = "check";

  document.getElementById("snake").className = "";
  document.getElementById("snake").innerText = "Snake";
}

else if (localStorage.getItem("animation") == "snake") {
  document.getElementById("snake").className = "material-symbols-rounded";
  document.getElementById("snake").innerText = "check";

  document.getElementById("random").className = "";
  document.getElementById("random").innerText = "Random Motion";
}