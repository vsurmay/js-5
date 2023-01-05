const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const list = document.querySelector("#time-list");
const timeCount = document.querySelector("#time");
const board = document.querySelector("#board");
const playAgainBtn = document.querySelector(".play__again");
const scoreTimes = document.querySelectorAll(".best__score");
const arrayScoreTimes = Array.from(scoreTimes);

const colors = [
  "#790a0a",
  "#bab406",
  "#21ba06",
  "#06ba9c",
  "#0345b8",
  "#7c03b8",
  "#b8034b",
  "#a88181",
];
let timeGame;
let score = 0;
let enterBestScore;

function chooseTime(event) {
  const el = event.target.closest(".time-btn");
  if (!el) return;
  timeGame = Number(el.dataset.time);
  screens[1].classList.add("up");
  startGame();
}

function startGame() {
  timeCount.parentNode.classList.remove("hide");
  timeCount.textContent = `00:${timeGame}`;
  playAgainBtn.classList.add("hide");
  enterBestScore = arrayScoreTimes.find(
    (el) => Number(el.dataset.scoretime) === timeGame
  );
  score = 0;
  createRandomCircle();
  const timeout = setInterval(() => {
    timeGame--;
    if (timeGame === 0) {
      finishGame();
      clearTimeout(timeout);
    }
    timeCount.textContent = `00:${adedZero(timeGame)}`;
  }, 1000);
}

function adedZero(num) {
  if (num < 10) return "0" + num;
  return num;
}

function finishGame() {
  enterBestScore.textContent = `${
    score > enterBestScore.textContent ? score : enterBestScore.textContent
  }`;
  board.innerHTML = `<h1>Рахунок: <span class="score">${score}</span></h1>`;
  timeCount.parentNode.classList.add("hide");
  playAgainBtn.classList.remove("hide");
}

function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const randNumSize = randomNum(15, 40);
  circle.style.background = `${colors[randomNum(0, colors.length - 1)]}`;
  circle.style.width = `${randNumSize}px`;
  circle.style.height = `${randNumSize}px`;
  circle.style.top = `${randomNum(40, board.offsetHeight - 40)}px`;
  circle.style.left = `${randomNum(40, board.offsetWidth - 40)}px`;

  board.append(circle);
}

function randomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

list.addEventListener("click", chooseTime);

board.addEventListener("click", (event) => {
  const el = event.target.closest(".circle");
  if (!el) return;
  score++;
  el.remove();
  createRandomCircle();
});

playAgainBtn.addEventListener("click", () => {
  screens[1].classList.remove("up");
  timeCount.parentNode.classList.remove("hide");
  board.innerHTML = "";
});
