const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const countSlide = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;

sidebar.style.top = `${-(countSlide - 1) * 100}vh`;

function changeSlide(str) {
  if (str === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === countSlide) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = countSlide - 1;
    }
  }
  const heigth = container.offsetHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;
}

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});
container.addEventListener("wheel", (event) => {
  if (event.deltaY === 100) changeSlide("up");
  if (event.deltaY === -100) changeSlide("down");
});
