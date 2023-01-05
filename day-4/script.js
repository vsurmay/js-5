const board = document.querySelector("#board");
const color = [
  "#790a0a",
  "#bab406",
  "#21ba06",
  "#06ba9c",
  "#0345b8",
  "#7c03b8",
  "#b8034b",
  "#a88181",
];
const squareNumber = 870;
let lastRandom;

for (let i = 0; i < squareNumber; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  board.append(div);
}

function randomColor(array) {
  const min = 0;
  const max = array.length;
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (lastRandom === randomNum) {
    return randomColor(color);
  }
  lastRandom = randomNum;
  return array[randomNum];
}

board.addEventListener("mouseover", (event) => {
  const el = event.target.closest(".square");
  if (!el) return;
  el.style.background = `${randomColor(color)}`;
  el.style.boxShadow = `0 0 2px ${randomColor(color)}, 0 0 10px ${randomColor(
    color
  )}`;
});
board.addEventListener("mouseout", (event) => {
  const el = event.target.closest(".square");
  if (!el) return;
  el.style.background = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
});
