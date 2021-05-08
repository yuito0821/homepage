'use strict';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let x = 0, y = 0;
let colorH = 0;
let colorS = 0, colorL = 0, colorSElement, colorLElement;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let hutoi = false;
let hosoi = false;
let width = 10;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function colortime() {
    // colorH = Math.floor(Math.random() * 360);
    colorH++;
    if (colorH > 360) {
        colorH = 0;
    }

}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

let button = document.getElementById("button");
button.onclick = clear;

function xyclear() {
    x = 0, y = 0;
}

let xy = document.getElementById("xy");
xy.onclick = xyclear;

function thick() {
    width++;
}
function thin() {
    width--;
}

function drawXY() {
    colorSElement = document.getElementById("colors");
    colorLElement = document.getElementById("colorl");
    colorS = colorSElement.value;
    colorL = colorLElement.value;
    let textS = document.getElementById("Stext");
    let textL = document.getElementById("Ltext");
    textS.value = colorS;
    textL.value = colorL;

    thickness.value = width;

    context.fillStyle = "hsl(" + colorH + "," + colorS + "%," + colorL + "%)";
    context.fillRect(x, y, width, width);

    if (rightPressed && x < canvas.width - width) {
        x += 1;
        context.fillRect(x, y, width, width);
    }
    if (leftPressed && x > 0) {
        x -= 1;
        context.fillRect(x, y, width, width);
    }
    if (upPressed && y > 0) {
        y -= 1;
        context.fillRect(x, y, width, width);
    }
    if (downPressed && y < canvas.height - width) {
        y += 1
        context.fillRect(x, y, width, width);
    }

}

function draw() {

    drawXY();
}

setInterval(draw, 0);
setInterval(colortime, 5);