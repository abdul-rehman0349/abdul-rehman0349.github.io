function randomcolor() {
    let r = Math.floor(Math.random()*100);
    let g = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);
    let colour = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("color").style.backgroundColor = colour;
    document.getElementById("code").textContent = colour;
}