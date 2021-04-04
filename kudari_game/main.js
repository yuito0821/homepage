'use strict';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let mX = canvas.width / 2;
let mY = 100;
let mW = 10;
let mH = 10;
let score = 0;
let rightPressed = false;
let leftPressed = false;



let colorList = [
	"red",
	"aqua",
	"green",
	"orange",
	"purple",
	"yellow"
]

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	}
	else if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
	else if (e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
}

class Ball {
	constructor(x, y, dx, dy, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.color = color;
	}
}
let ball = [];

function ballAdd() {
	let b_x = Math.floor(Math.random() * canvas.width);
	let b_y = canvas.height;
	let b_dy = 2;
	let b_color = colorList[Math.floor(Math.random() * colorList.length)];

	let b = new Ball(b_x, b_y, b_x, b_dy, b_color);
	ball.push(b);
}

function drawMy() {
	context.fillStyle = "white";
	context.fillRect(mX, mY, mW, mH);

	if (rightPressed && mX < 1400) {
		mX += 3;
	}
	else if (leftPressed && mX > 0) {
		mX -= 3;
	}
}

function draw() {
	let w = 5;
	let h = 5;

	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = "15px bold";
	context.fillStyle = "white"
	context.fillText("SCORE:" + score, 0, 25);
	drawMy();

	for (let i = 0; i < ball.length; i++) {
		context.fillStyle = ball[i].color;
		context.fillRect(ball[i].x, ball[i].y, w, h);
		ball[i].y -= ball[i].dy;

		if (ball[i].y > mY - mH && ball[i].y < mY + mH) {
			if (ball[i].x > mX - mW && ball[i].x < mX + mW) {
				context.font = "50px bold";
				context.fillStyle = ball[i].color;
				context.fillText("GAME OVER", canvas.width / 3, canvas.height / 3);
				context.fillText("SCORE:" + score, canvas.width / 3, canvas.height / 2);
				clearInterval(interval);

				document.addEventListener("keydown", e => {
					if (e.key == "Enter") {
						document.location.reload();
					}
				});
			}
		}

		if (ball[i].y < 0) {
			ball.shift();
			score++;
		}
	}
}

setInterval(ballAdd, 25);
let interval = setInterval(draw, 5);