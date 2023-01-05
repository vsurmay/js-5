const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");
let element;

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("hide"), 0);
  element = this;
}

function dragEnd() {
  this.classList.remove("hold", "hide");
}

function dragover(event) {
  event.preventDefault();
}
function dragenter() {
  this.classList.add("hovered");
}
function dragleave() {
  this.classList.remove("hovered");
}
function drop() {
  this.append(element);
  this.classList.remove("hovered");
}

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
});
