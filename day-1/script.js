function slidePlagin(n) {
  const slider = document.querySelector(".slider");
  const slide = document.querySelectorAll(".slide");
  slide[n].classList.add("active");
  let lastEl;

  function showSlide(event) {
    slide[n].classList.remove("active");
    const el = event.target.closest(".slide");
    if (!el) return;
    if (lastEl) lastEl.classList.remove("active");
    el.classList.add("active");
    lastEl = el;
  }

  slider.addEventListener("click", showSlide);
}
slidePlagin(4);
