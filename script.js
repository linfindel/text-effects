setInterval(() => {
    let colour = randomColour();
    document.getElementById("text").style.textShadow = `0 0 30px ${colour}, 0 0 40px ${colour}, 0 0 50px ${colour}, 0 0 60px ${colour}, 0 0 70px ${colour}`;
}, 1000);

function randomColour() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}