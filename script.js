document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");
  elements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add("animated");
    }, idx * 80);
  });
});
