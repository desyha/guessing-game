"use strict";

function randNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function changeBackground(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function revealNum(num) {
  document.querySelector(".number").textContent = num;
}

function btnDisabled(state) {
  document.querySelector(".check").disabled = state;
}

let corrNum = randNum();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const inputNum = Number(document.querySelector(".guess").value);
  if (!inputNum) {
    displayMessage("No number!!!");
  } else if (inputNum === corrNum) {
    score++;
    displayMessage("Correct number!!!");
    changeBackground("#60b347");
    revealNum(corrNum);
    btnDisabled(true);
    if (score > highScore) {
      highScore = score;
    }
  } else {
    score--;
    inputNum > corrNum ? displayMessage("Too high") : displayMessage("Too low");
    if (score < 1) {
      revealNum(corrNum);
      changeBackground("#EE4B2B");
      displayMessage("You Lost the game...");
      btnDisabled(true);
    }
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  corrNum = randNum();
  score = 20;
  btnDisabled(false);
  document.querySelector(".score").textContent = score;
  revealNum("?");
  changeBackground("#222");
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highScore;
});
